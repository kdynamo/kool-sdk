/// <reference types="vite/client" />
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';
import { globSync } from 'fs';
import { fileURLToPath } from 'url';

export default defineConfig({
  plugins: [react(), dts({ tsconfigPath: 'tsconfig.build.json' })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'), // Your library's entry point
      name: 'KoolSdkReact', // The global variable name in UMD format
      formats: ['es'],
      // fileName: (format) => `kool-sdk-react.${format}.ts`,
    },
    rollupOptions: {
      // Externalize peer dependencies to prevent them from being bundled
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
      input: Object.fromEntries(
        globSync(['src/components/**/index.tsx', 'src/main.ts']).map((file) => {
          // This remove `src/` as well as the file extension from each
          // file, so e.g. src/nested/foo.js becomes nested/foo
          const entryName = path.relative(
            'src',
            file.slice(0, file.length - path.extname(file).length)
          )
          // This expands the relative paths to absolute paths, so e.g.
          // src/nested/foo becomes /project/src/nested/foo.js
          const entryUrl = fileURLToPath(new URL(file, import.meta.url))
          return [entryName, entryUrl]
        })
      ),
    },
  },
});