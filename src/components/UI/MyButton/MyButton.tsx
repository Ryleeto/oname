import React, { FC } from 'react'
import cl from './MyButton.module.css'

interface IText {
  onClick?: () => void;
  children?: React.ReactNode;
}

const MyButton: FC<IText> = ({children, onClick}) => {
  return (
    <button className={cl.MyBtn} onClick={onClick}>{children}</button>
  )
}

export default MyButton;