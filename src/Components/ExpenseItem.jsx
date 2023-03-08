import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.jsx';
function ExpenseItem(props) {
  const [title,setTitle] = useState(props.title);
  // let title = props.title;
  const updateTitle = () => {
    setTitle('updated');
    console.log('user clicked');
  }
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item-description">
        <h1>{title}</h1>
      </div>
      <div className="expense-item-price">{props.amount}</div>
      <button onClick={updateTitle}>Update Title</button>
    </div>
  )
}
export default ExpenseItem;