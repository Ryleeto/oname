import React, { FC } from 'react'
import MyInput from '../MyInput/MyInput'
import MyButton from '../MyButton/MyButton'
import cl from './MyForm.module.css'

const MyForm = () => {
  return (
    <form className={cl.MyF}>
        <MyInput />
        <MyInput />
        <MyButton>Клик</MyButton>
    </form>
  )
}

export default MyForm