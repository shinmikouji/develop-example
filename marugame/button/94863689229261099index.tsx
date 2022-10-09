import React from 'react';
import s from './index.module.scss';
import {
  mapAttrModifiers,
  AttrModifiersProps,
  TypeModifiersProps,
} from 'libs/component';
import { Icon, IconProps } from 'components/atoms/icon';
import { getRel } from 'libs/component';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Pick<IconProps, 'name'> & {
    children?: React.ReactNode;
    modifiers?: AttrModifiersProps & {
      'is-size-fixed'?: boolean;
    } & TypeModifiersProps<'primary' | 'secondary'>;
    previousIcon?: boolean;
  };

export const Button: React.FC<ButtonProps> = ({
  children,
  modifiers,
  href,
  name,
  previousIcon,
  target,
  onClick,
}) => {
  const TagName = href ? 'a' : 'button';
  const rel = getRel(href || '', target || '');
  const icon = (
    <span className={s['a-button__icon-wrapper']} data-name={name}>
      <Icon name={name}></Icon>
    </span>
  );
  return (
    <TagName
      className={s['a-button']}
      {...mapAttrModifiers(modifiers)}
      target={target}
      onClick={onClick}
      {...(href ? { href } : { type: 'button' })}
      {...(href && rel ? { rel } : '')}
      data-name={name}
    >
      {name && previousIcon && icon}
      <span className={s['a-button__label']}>{children}</span>
      {name && !previousIcon && icon}
    </TagName>
  );
};
