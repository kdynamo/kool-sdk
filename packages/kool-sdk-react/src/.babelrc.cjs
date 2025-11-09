// Source - https://stackoverflow.com/q
// Posted by dugong, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-08, License - CC BY-SA 4.0

module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/proposal-class-properties',
    '@babel/transform-regenerator',
    '@babel/plugin-transform-template-literals',
    'react-hot-loader/babel',
  ],
}
