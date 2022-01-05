import React from 'react';
import BudgetsDisplay from '../features/budgets/BudgetsDisplay'
import Transactions from '../features/transactions/Transactions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense Tracker</h1>
        <BudgetsDisplay />
        <Transactions />
      </header>
    </div>
  );
}

export default App;
