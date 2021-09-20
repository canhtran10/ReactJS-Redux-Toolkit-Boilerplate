/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface ItemProp extends InputProps {
  content: string;
  value: string | number;
  action?: (event: React.MouseEvent<HTMLElement>, ...extra: ItemProp[]) => void;
}

interface Props extends InputProps {
  id: string;
  label?: string;
  className?: string;
  title: string;
  items: ItemProp[];
}

export const DropDownButton = (input: Props) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(input.title);

  const onDropDownClick = () => {
    console.log('on drop click');
    setOpen(!open);
  };

  const handleClickEvent = (e: React.MouseEvent<HTMLElement>, item?: ItemProp) => {
    console.log('handle click');
    e.preventDefault();
    if (item && item.action) {
      item.action(e, item);
    }

    if (item) {
      setTitle(item.content);
    } else {
      setTitle(e.currentTarget.textContent || '');
    }

    setOpen(false);
  };

  return (
    <li className={`nav-item dropdown ${open ? 'show' : ''}`} key={input.id}>
      <a
        className='nav-link dropdown-toggle'
        href='#'
        id='navbarDropdown'
        role='button'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'
        onClick={onDropDownClick}
      >
        {title}
      </a>
      <div className={`dropdown-menu ${open ? 'show' : ''}`} aria-labelledby='navbarDropdown'>
        {input.items.map((item) => (
          <button
            className='dropdown-item'
            key={item.value}
            onClick={(e) => handleClickEvent(e, item)}
          >
            {item.content}
          </button>
        ))}
      </div>
    </li>
  );
};
