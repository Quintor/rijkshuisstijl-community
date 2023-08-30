import type { Meta, StoryObj } from '@storybook/react';
// import { UtrechtButton, UtrechtIcon } from '@utrecht/web-component-library-react';
// import { PropsWithChildren } from 'react';
import readme from './card.md?raw';

// interface CardStoryProps {
//
// }

const CardStory = () => (
  <div>
    <h2>Logius Card Story</h2>
    <logius-card></logius-card>
  </div>
);

const meta = {
  title: 'Logius/Card',
  id: 'logius-card',
  component: CardStory,
  argTypes: {
    children: {
      description: 'Card text - default webcomponent slot',
      type: {
        name: 'string',
        required: true,
      },
      table: {
        category: 'Webcomponent Slot',
      },
      defaultValue: '',
    },
  },
  args: {
    children: '',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: CardStory,
} as Meta<typeof CardStory>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    children: 'Label',
  },
};
