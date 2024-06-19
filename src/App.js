// import React from 'react';
import './App.css';
import {Header} from './components/Header' ;
import Balance from './components/Balance' ;
import IncomeExpenses from './components/IncomeExpenses' ;
import Transaction from './components/Transactions' ;
import NewTransactionTransaction from './components/NewTransaction' ;
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div className='container'>
      <Balance/>
      <IncomeExpenses/>
      <Transaction/>
      <NewTransactionTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
