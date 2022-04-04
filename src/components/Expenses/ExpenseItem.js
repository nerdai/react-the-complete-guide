import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  // props is an object containing the properties or attributes associate with
  // the component. Note: only have one root element in each return JSX snippet

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/> 
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>$ {props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
