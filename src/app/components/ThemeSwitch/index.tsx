import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { themeActions } from 'styles/theme/slice';
import { selectThemeKey } from 'styles/theme/slice/selectors';
import { ThemeKeyType } from 'styles/theme/slice/types';
import { themes } from 'styles/theme/themes';
import { saveTheme } from 'styles/theme/utils';
import { Radio } from '../Radio';

export const ThemeSwitch = () => {
  const theme = useSelector(selectThemeKey);
  const dispatch = useDispatch();

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ThemeKeyType;
    saveTheme(value);
    dispatch(themeActions.changeTheme(value));
  };

  const themeOption = (thm: string) => {
    return (
      <Radio
        id={thm}
        label={thm}
        key={thm}
        isSelected={theme === thm}
        onChange={handleThemeChange}
        className='radio'
        name='theme'
        value={thm}
      />
    );
  };

  return <Themes>{Object.keys(themes).map(themeOption)}</Themes>;
};

const Themes = styled.div`
  display: flex;
  background-color: ${(t) => t.theme.background};
  color: ${(t) => t.theme.text};
  .radio {
    margin-right: 1.5 rem;
  }
`;
