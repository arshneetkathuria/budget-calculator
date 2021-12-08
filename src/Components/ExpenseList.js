import React from 'react';
import ExpenseItem from './ExpenseItem';
import "../App.css";
import {MdDelete} from "react-icons/md"

const ExpenseList = (props) => {
    console.log(props);
    return (
        <div>
            <ul className="list">
                {props.expenseList.map((expense) => { return (<ExpenseItem key={expense.id} expense={expense} handleDelete={props.handleDelete} handleEdit={props.handleEdit}/>) })}
            </ul>
            {props.expenseList.length > 0 && <button className="btn" onClick={props.handleClear}>Clear Expenses
            <MdDelete className="btn-icon"/></button>}
        </div>)
}
export default ExpenseList;