import React from 'react';
import "../App.css";
import { MdSend } from 'react-icons/md';

const ExpenseForm=(props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className="form-center">
            <div className="form-group">
                <label htmlFor="charge">charge</label>
                <input type="text" className="form-control" id="charge" name="charge" value={props.charge} onChange={props.handleCharge} placeholder="e.g. rent"></input>
            </div>
            <div className="form-group">
                <label htmlFor="amount">amount</label>
                <input type="number" className="form-control" id="amount" name="amount" value={props.amount} onChange={props.handleAmount} placeholder="e.g. 2000"></input>
</div>
        </div>
        <button className="btn">{props.edit ? "Edit":"Submit"}
        <MdSend className="btn-icon"/>
        </button>
    </form>
}
export default ExpenseForm;