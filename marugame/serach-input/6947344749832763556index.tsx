import React, {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  useState,
} from 'react';
import s from './index.module.scss';
import { Icon } from 'components/atoms/icon';

export type SearchInputProps = ButtonHTMLAttributes<HTMLButtonElement> &
  InputHTMLAttributes<HTMLInputElement> & {
    children?: string;
    onSearch?: (searchString: string | null) => void;
  };

export const SearchInput: React.FC<SearchInputProps> = ({
  children,
  onSearch,
}) => {
  const [inputText, setInputText] = useState<string | null>(null);

  return (
    <div className={s['a-search-input']}>
      <input
        className={s['a-search-input__input']}
        type="search"
        placeholder={children}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && inputText) onSearch && onSearch(inputText);
        }}
        onInput={(e) => {
          setInputText(e.currentTarget.value);
        }}
      />
      <button
        className={s['a-search-input__button']}
        onClick={() => {
          onSearch && onSearch(inputText);
        }}
      >
        <span className={s['a-search-input__button-label']}>search</span>
        <Icon name="search" />
      </button>
    </div>
  );
};
