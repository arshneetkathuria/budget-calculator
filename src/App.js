import React,{useState,useEffect} from 'react';
import './App.css';
import Alert from './Components/Alert';
import ExpenseForm from './Components/ExpenseForm';
import { v4 as uuidv4 } from 'uuid';
import ExpenseList from './Components/ExpenseList';

// const initialExpenses = [
//   {id:uuidv4(), charge: "rent", amount: 2000},
//   { id:uuidv4(), charge: "car payment", amount: 300 },
//   { id: uuidv4(), charge: "credit card", amount: 500 }
// ];

const initialExpenses = localStorage.getItem("expenses") ? JSON.parse(localStorage.getItem("expenses")) : [];
console.log(initialExpenses);

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState('');
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  //*************useEffect***************/

  useEffect(() => {
    console.log("use Effect");
    localStorage.setItem("expenses", JSON.stringify(expenses));
  },[expenses]);
  
  //handle charge
  const handleCharge = e => {
    setCharge(e.target.value);
  };
  
  //handle amount
  const handleamount = e => {
    setAmount(e.target.value);
  };
  
  //handle alert
  const handleAlert = e => {
    setAlert({ show: true, text: e.text, type: e.type });
    setTimeout(() => {
      setAlert({show: false});
    }, 5000);
  }

  //handle submit
  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map(item => item.id === id ? { ...item, charge, amount } : item);
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "item edited" });

       }
      else {
        const singleExpense = { id: uuidv4(), charge: charge, amount: amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "Successfully added" });
        setCharge('');
        setAmount('');
      }
    } else {
        handleAlert({type:"danger", text:"Charge cant be empty value and amount value has to be bigger"});
    }
  };

  //clear all the items
  const handleClearItems = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "all items deleted" });

  }

  //delete item
  const deleteItem = id => {
    let temp = expenses.filter(item => item.id !== id);
    setExpenses(temp);
    handleAlert({ type: "danger", text: "item deleted" });
  }

  //handle edit
  const handleEdit = id => {
    const expense = expenses.find(item => item.id === id);
    let temp = expense;
    setCharge(temp.charge);
    setAmount(temp.amount);
    setEdit(true);
    setId(id);
  }

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text}/>}
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm charge={charge} amount={amount} handleCharge={handleCharge} handleAmount={handleamount} handleSubmit={handleSubmit} edit={edit}/>
        <ExpenseList expenseList={expenses} handleClear={handleClearItems} handleDelete={deleteItem} handleEdit={handleEdit}/>
      </main>
      <h1>Total spending:${expenses.reduce((acc, curr) => {
        return acc += parseInt(curr.amount);
      }, 0)}
      </h1>
    </>
  )
}

export default App;
