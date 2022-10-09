import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Icon, IconProps } from './index';

export default {
  title: 'components/atoms/Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'answer',
};

export const AccordionClose = Template.bind({});
AccordionClose.args = { name: 'accordion-close' };

export const AccordionOpen = Template.bind({});
AccordionOpen.args = { name: 'accordion-open' };

export const Answer = Template.bind({});
Answer.args = { name: 'answer' };

export const App = Template.bind({});
App.args = { name: 'app' };

export const AppLogo = Template.bind({});
AppLogo.args = { name: 'app-logo' };

export const ArrowCircle = Template.bind({});
ArrowCircle.args = { name: 'arrow-circle' };

export const ArrowPulldown = Template.bind({});
ArrowPulldown.args = { name: 'arrow-pulldown' };

export const Arrow = Template.bind({});
Arrow.args = { name: 'arrow' };

export const Cashless = Template.bind({});
Cashless.args = { name: 'cashless' };

export const Circle = Template.bind({});
Circle.args = { name: 'circle' };

export const Cross = Template.bind({});
Cross.args = { name: 'cross' };

export const Concept = Template.bind({});
Concept.args = { name: 'concept' };

export const DotLarge = Template.bind({});
DotLarge.args = { name: 'dot-large' };

export const DotSmall = Template.bind({});
DotSmall.args = { name: 'dot-small' };

export const Error = Template.bind({});
Error.args = { name: 'error' };

export const Facebook = Template.bind({});
Facebook.args = { name: 'facebook' };

export const Filter = Template.bind({});
Filter.args = { name: 'filter' };

export const Howtoorder = Template.bind({});
Howtoorder.args = { name: 'howtoorder' };

export const Instagram = Template.bind({});
Instagram.args = { name: 'instagram' };

export const ExternalSmall = Template.bind({});
ExternalSmall.args = { name: 'external-small' };

export const External = Template.bind({});
External.args = { name: 'external' };

export const List = Template.bind({});
List.args = { name: 'list' };

export const Menu = Template.bind({});
Menu.args = { name: 'menu' };

export const MobileOrder = Template.bind({});
MobileOrder.args = { name: 'mobile-order' };

export const Notfound = Template.bind({});
Notfound.args = { name: 'notfound' };

export const Order = Template.bind({});
Order.args = { name: 'order' };

export const Pdf = Template.bind({});
Pdf.args = { name: 'pdf' };

export const Question = Template.bind({});
Question.args = { name: 'question' };

export const Search = Template.bind({});
Search.args = { name: 'search' };

export const Service = Template.bind({});
Service.args = { name: 'service' };

export const Staff = Template.bind({});
Staff.args = { name: 'staff' };

export const Store = Template.bind({});
Store.args = { name: 'store' };

export const Takeout = Template.bind({});
Takeout.args = { name: 'takeout' };

export const Triangle = Template.bind({});
Triangle.args = { name: 'triangle' };

export const Twitter = Template.bind({});
Twitter.args = { name: 'twitter' };

export const Youtube = Template.bind({});
Youtube.args = { name: 'youtube' };
