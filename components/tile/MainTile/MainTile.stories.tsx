import type { ComponentStory, Meta } from '@storybook/react';
import MainTile from './MainTile';

const Story: Meta<typeof MainTile> = {
  component: MainTile,
  title: 'MainTile',
};
export default Story;

const cta = {
  url: {
    external: true,
    link: 'https://x.com',
  },
  content: 'x',
};

const Template: ComponentStory<typeof MainTile> = (args) => (
  <MainTile {...args} />
);

export const Primary = Template.bind({});
