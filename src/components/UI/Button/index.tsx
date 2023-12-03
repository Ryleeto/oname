import React, { FC } from 'react'
import cl from './Button.module.css'

interface IButtonProps {
  type?: 'submit' | undefined | 'reset' | 'button';
  onClick?: (e?: any) => void;
  children?: React.ReactNode;
}

const Button: FC<IButtonProps> = ({ type, children, onClick }) => {

  return (
    <button className={cl.MyBtn} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;