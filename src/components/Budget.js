import React from 'react';
import { useSelector } from 'react-redux';
import transactionsSlice, { selectTransactions } from '../features/transactions/transactionsSlice';

const Budget = ({ budget }) => {

    const transactions = useSelector(selectTransactions)
    console.log(budget.amount)

    const calculateTotalExpenses = () => {
        return transactions[budget.category].map(transaction => transaction.amount).reduce((amount1, amount2) => amount1 + amount2, 0)
    }

    const getFundsRemainingClassName = (amount) => {
        if (parseFloat(amount) === 0) {
            return null;
        }

        return parseFloat(amount) > 0 ? 'positive' : 'negative';
    }

    const remainingFunds = (budget.amount - calculateTotalExpenses()).toFixed(2)
    const fundsRemainingClassName = getFundsRemainingClassName(remainingFunds);

    return (
        <li className="budget-container">
            <div className="category-label">Category</div>{' '}

            <div className="category-wrapper">
                <h3 className="category-value">{budget.category}</h3>
                {/*}
          <form onSubmit={handleEdit} className="budget-form">
            <input
              className="amount-input"
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
              type="number"
              step="0.01"
            />
            <button className="update-button">Update</button>
          </form>*/}
            </div>


            <h4 className={`remaining-funds ${fundsRemainingClassName}`}>
                Funds Remaining: {remainingFunds}
            </h4>

        </li>
    );
};

export default Budget;