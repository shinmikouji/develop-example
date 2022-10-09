import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SearchInput, SearchInputProps } from './index';

export default {
  title: 'components/atoms/SearchInput',
  component: SearchInput,
} as Meta;

const Template: Story<SearchInputProps> = (args) => <SearchInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '店名・住所・電話番号から探す',
  onSearch: (searchString) => {
    console.log(searchString);
  },
};
