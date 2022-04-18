import React from "react";

import "./DefaultView.css";

const DefaultView = (props) => {
  const addNewExpenseHandler = (event) => {
    event.preventDefault();
    props.onViewAddNewExpense(true);
  };

  return (
    <div>
      <button onClick={addNewExpenseHandler}>Add New Expense</button>
    </div>
  );
};

export default DefaultView;
