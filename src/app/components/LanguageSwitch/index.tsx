import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropDownButton } from '../DropDownButton';

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const [title, setTitle] = useState(i18n.language.toUpperCase());

  const handleLanguageChange = (event: React.MouseEvent<HTMLElement>, ...extras: any[]) => {
    console.log('Changing lang to ', event.currentTarget.textContent);
    const lang: string =
      event.currentTarget.textContent?.trim().toLocaleLowerCase() ||
      i18n.options.fallbackLng?.toString() ||
      'en';
    i18n.changeLanguage(lang);
    setTitle(lang);
  };

  const availLang =
    (i18n.options.resources &&
      Object.keys(i18n.options.resources!).map((lang) => {
        return { value: lang, content: lang.toUpperCase(), action: handleLanguageChange };
      })) ||
    [];

  return <DropDownButton id='lang' title={title} items={availLang} />;
};
