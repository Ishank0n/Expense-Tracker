
import { useState, useEffect } from 'react';
import './App.css'



function App() {

  let [description, setDescription] = useState('');
  let [amount, setAmount] = useState('');
  let [error, setError] = useState('');
  let [editingId, setEditingId] = useState(null);
const [transactions, setTransactions] = useState(() => {
  const savedTransactions = localStorage.getItem("transactions");

  if (savedTransactions !== null) {
    return JSON.parse(savedTransactions);
  }

  return [
    {
      id: 1,
      description: "Salary",
      amount: 50000,
    },
    {
      id: 2,
      description: "Pizza",
      amount: -700,
    },
  ];
});

const [theme, setTheme] = useState(() => {
  const saved = localStorage.getItem('theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
});

useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}, [theme]);


  function deleteTransaction(id){
    const updatedTransactions = transactions.filter((transaction)=>{
     return transaction.id !== id;
    });
    setTransactions(updatedTransactions);
  }

  function addTransaction(){

    if(description === ''){
      setError('Add a valid description');
      return;
    }else if(amount === ''){
      setError('Add a valid amount');
      return;
    }else if(amount === '0'){
      setError('Amount cannot be 0')
      return;
    }
    else{setError('')
      const newObject = {
      id: crypto.randomUUID(),
      description,
      amount: Number(amount)
    };

  setTransactions(transactions => [...transactions, newObject])
  setDescription('');
  setAmount('');}
  }

  function updateTransaction(){

    if(description === ''){
      setError('Add a valid description');
      return;
    }else if(amount === ''){
      setError('Add a valid amount');
      return;
    }else if(amount === '0'){
      setError('Amount cannot be 0')
      return;
    }else{setError('')
    const updatedObject = transactions.map((transaction)=>{
      if(transaction.id === editingId){
        return {
          id: transaction.id,
          description: description,
          amount: Number(amount)
        }
      }
      return transaction;
    });
    setTransactions(updatedObject);

    setDescription('');
    setAmount('');
    setEditingId(null)
  }}

  useEffect(()=>{
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions]);

const income = transactions.reduce((total, transaction) => {
  if (transaction.amount > 0){
    return total + Number(transaction.amount);
  }
  return total;
}, 0); 

const expense = transactions.reduce((total, transaction)=>{
  if (transaction.amount < 0 ){
    return total + Number(transaction.amount);
    }
    return (total);
}, 0);

const balance = income + expense;

  return(

    <section>

        <button
    className="theme-toggle"
    aria-label="Toggle dark mode"
    onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
  >
    {theme === 'dark' ? '☀️' : '🌙'}
  </button>

      <div className="header">
      <h1 className="title">Expense Tracker</h1>
      <h2 className="balance">Your Balance</h2>
      <p className="amount">₹{balance}</p>
      </div>

      <div className="summary">
        <div className="income"><p className="income">Income</p> <p>₹{income}</p></div>
        <div className="expense"><p className="expense">Expense</p><p>₹{Math.abs(expense)}</p></div>
      </div>

      <div className="new-transaction">
        <h3>Add New Transaction</h3>
        <input className='description-input' type='text' placeholder='Description' value= {description} onChange={(e) => setDescription(e.target.value)}/>
        <input type="number" className='amount-input' placeholder='Amount' value={amount} onChange={(e)=> setAmount(e.target.value)}/>
        <p className='error'>{error}</p>
        <button className="add" onClick={()=>{
          if(editingId === null){
            addTransaction()
          }else{updateTransaction()}
        }}>{editingId === null ? "Add Transaction" : "Update Transaction"}</button>
      </div>

      <div className="history">
  <h4>History</h4>

  {['income', 'expense'].map((kind) => {
    const grouped = transactions
      .filter((t) => (kind === 'income' ? t.amount > 0 : t.amount < 0))
      .sort((a, b) => Math.abs(b.amount) - Math.abs(a.amount));

    if (grouped.length === 0) return null;

    return (
      <div className={`history-group history-group--${kind}`} key={kind}>
        <p className="history-group-label">
          {kind === 'income' ? 'Income' : 'Expenses'} ({grouped.length})
        </p>
        <div>
          {grouped.map((transaction) => (
            <div key={transaction.id}>
              <p>
                Transaction: {transaction.description}{' '}
                <span>
                  <button className="edit" onClick={() => {
                    setDescription(transaction.description);
                    setAmount(transaction.amount);
                    setEditingId(transaction.id);
                  }}>✏️</button>
                </span>
                <br />
                Amount: {transaction.amount}{' '}
                <span>
                  <button className="delete" onClick={() => deleteTransaction(transaction.id)}>🗑️</button>
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  })}
</div>
    </section>

  )
}

export default App;
