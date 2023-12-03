import React, { FC } from 'react'
import cl from './Input.module.css'

interface IInputProps {
  value?: string;
  onChange?: (e: any) => void;
  placeholder?: string;
}

const Input: FC<IInputProps> = ({ placeholder, onChange, value }) => {
  return <input className={cl.MyInp} placeholder={placeholder} onChange={onChange} value={value}/>;
};

export default Input