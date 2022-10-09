import React from 'react';
import s from './index.module.scss';
import { Icon } from 'components/atoms/icon';
import { getRel } from 'libs/component';

export type ArrowTextLinkProps =
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children?: React.ReactNode;
  };

export const ArrowTextLink: React.FC<ArrowTextLinkProps> = ({
  children,
  href,
  target,
  onClick,
}) => (
  <a
    className={s['a-arrow-text-link']}
    href={href}
    target={target}
    rel={getRel(href || '', target || '')}
    onClick={onClick}
  >
    <span className={s['a-arrow-text-link__label']}>{children}</span>
    <div className={s['a-arrow-text-link__icon-wrapper']}>
      <Icon name="arrow-circle"></Icon>
    </div>
  </a>
);
