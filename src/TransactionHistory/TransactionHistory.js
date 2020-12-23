import React from 'react';
import './TransactionHistory.css';


function TransactionHistory({ items }) {
   
    return (
        <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
      
        <tbody>
          {items.map(i => <tr key={i.id}>
            <td>{i.type}</td>
            <td>{i.amount}</td>
            <td>{i.currency}</td>
          </tr>)}
        </tbody>
      </table>
       
  )
}

export default TransactionHistory;


