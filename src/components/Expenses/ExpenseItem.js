import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // props is an object containing the properties or attributes associate with
  // the component. Note: only have one root element in each return JSX snippet
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/> 
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>$ {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
