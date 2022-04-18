import React, { useState } from 'react';
import DefaultView from './DefaultView';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }

  const [activateAddNewExpenseView, setActivateAddNewExpenseView] = useState(false);

  const viewAddNewExpense = (toggle) => {
    setActivateAddNewExpenseView(toggle);
  };

  if (!activateAddNewExpenseView) {
    return <div className='new-expense'>
      <DefaultView onViewAddNewExpense={viewAddNewExpense}/>
    </div>
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onViewAddNewExpense={viewAddNewExpense} />
    </div>
  );
};

export default NewExpense;