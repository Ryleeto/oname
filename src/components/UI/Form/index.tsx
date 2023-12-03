import React, { FC, useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import cl from './Form.module.css'

interface IFormProps {

}

const Form: FC<IFormProps> = () => {

  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');


  const AlertMessage = (e: any) => {
    e.preventDefault()
    alert(firstValue + ' ' + secondValue);
  };

  return (
    <form className={cl.MyF}>
      <Input
        value={firstValue}
        placeholder="Тут один плейсхоледер"
        onChange={e => setFirstValue(e.target.value)}
      />
      <Input value={secondValue} placeholder="Тут другой плейсхолдер" onChange={e => setSecondValue(e.target.value)}/>
      <Button type="submit" onClick={AlertMessage}>Клик</Button>
    </form>
  );
}

export default Form