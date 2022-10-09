/* eslint-disable @next/next/no-img-element */
import React from 'react';
import s from './index.module.scss';

import AccordionClose from 'svgs/icon-accordion-close.svg';
import AccordionOpen from 'svgs/icon-accordion-open.svg';
import Answer from 'svgs/icon-answer.svg';
import App from 'svgs/icon-app.svg';
import AppLogo from 'svgs/icon-app-logo.svg';
import ArrowCircle from 'svgs/icon-arrow-circle.svg';
import ArrowPulldown from 'svgs/icon-arrow-pulldown.svg';
import Arrow from 'svgs/icon-arrow.svg';
import Cashless from 'svgs/icon-cashless.svg';
import Circle from 'svgs/icon-circle.svg';
import Cross from 'svgs/icon-cross.svg';
import Concept from 'svgs/icon-concept.svg';
import DotLarge from 'svgs/icon-dot-large.svg';
import DotSmall from 'svgs/icon-dot-small.svg';
import Error from 'svgs/icon-error.svg';
import External from 'svgs/icon-external.svg';
import ExternalSmall from 'svgs/icon-external-small.svg';
import Facebook from 'svgs/icon-facebook.svg';
import Filter from 'svgs/icon-filter.svg';
import Howtoorder from 'svgs/icon-howtoorder.svg';
import Instagram from 'svgs/icon-instagram.svg';
import List from 'svgs/icon-list.svg';
import Menu from 'svgs/icon-menu.svg';
import MobileOrder from 'svgs/icon-mobile-order.svg';
import Notfound from 'svgs/icon-notfound.svg';
import Order from 'svgs/icon-order.svg';
import Play from 'svgs/icon-play.svg';
import Pdf from 'svgs/icon-pdf.svg';
import Question from 'svgs/icon-question.svg';
import Search from 'svgs/icon-search.svg';
import Service from 'svgs/icon-service.svg';
import Staff from 'svgs/icon-staff.svg';
import Store from 'svgs/icon-store.svg';
import Takeout from 'svgs/icon-takeout.svg';
import Triangle from 'svgs/icon-triangle.svg';
import Twitter from 'svgs/icon-twitter.svg';
import Youtube from 'svgs/icon-youtube.svg';

type IconsProps = {
  [key: string]: React.ReactNode;
};

const icons = {
  'accordion-close': <AccordionClose />,
  'accordion-open': <AccordionOpen />,
  answer: <Answer />,
  app: <App />,
  'app-logo': <AppLogo />,
  'arrow-circle': <ArrowCircle />,
  'arrow-pulldown': <ArrowPulldown />,
  arrow: <Arrow />,
  external: <External />,
  'external-small': <ExternalSmall />,
  cashless: <Cashless />,
  circle: <Circle />,
  cross: <Cross />,
  concept: <Concept />,
  'dot-large': <DotLarge />,
  'dot-small': <DotSmall />,
  error: <Error />,
  facebook: <Facebook />,
  filter: <Filter />,
  howtoorder: <Howtoorder />,
  instagram: <Instagram />,
  list: <List />,
  menu: <Menu />,
  'mobile-order': <MobileOrder />,
  notfound: <Notfound />,
  order: <Order />,
  play: <Play />,
  pdf: <Pdf />,
  question: <Question />,
  search: <Search />,
  service: <Service />,
  staff: <Staff />,
  store: <Store />,
  takeout: <Takeout />,
  triangle: <Triangle />,
  twitter: <Twitter />,
  youtube: <Youtube />,
} as IconsProps;

const names = Object.keys(icons) as string[];

export type IconProps = {
  name?: typeof names[number];
  src?: string;
};

export const Icon: React.FC<IconProps> = ({ name, src }) => {
  if (!name) return null;

  return (
    <span className={s['a-icon']}>
      {src ? <img src={src} alt="" /> : icons[name]}
    </span>
  );
};
