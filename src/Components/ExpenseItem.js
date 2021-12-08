import React from 'react';
import "../App.css";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = (props) => {
    // console.log(props.expense.id);
    return <>
        <li className="item"><div className="info">
            <span className="expense">{props.expense.charge}</span>
            <span className="amount">${props.expense.amount}</span>
        </div>
            <MdEdit className="edit-btn" aria-label="edit button" onClick={() => props.handleEdit(props.expense.id)}/>
            <MdDelete className="clear-btn" aria-label="clear button" onClick={() =>props.handleDelete(props.expense.id)}/>
        </li>
    </>
}

export default ExpenseItem;