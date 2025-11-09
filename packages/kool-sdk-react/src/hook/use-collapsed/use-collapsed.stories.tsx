import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import { useCollapsed, type UseCollapsedProps } from './use-collapsed';


const TestUseCollapsed = (props: UseCollapsedProps) => {
  const {
    collapse,
    collapsed,
    expand,
    toggle,
  } = useCollapsed({collapsed: false });

  const clickHandler = () => {
    collapsed ? expand() : collapse();
  }
  return (
    <>
      <div>
        Header
        <button onClick={clickHandler}>
          { collapsed ? 'Expand' : 'Contract' }
        </button>
      </div>
      { !collapsed && (
        <div>Content</div>
      )}
    </>
  );
};
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Hooks/useCollapsed',
  component: TestUseCollapsed,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',

    docs: {
      description: 'Used for handling collapsing and expanding content'
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],


  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onCollapse: fn(), onExpand: fn() },
} satisfies Meta<typeof TestUseCollapsed>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const InitialExpanded: Story = {
  args: {
    collapsed: false,
  },
};

export const InitialCollapsed: Story = {
  args: {
    collapsed: true,
  },
};

