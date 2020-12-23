import React from 'react';
import './Statistics.css';


function Statistics({ title, stats }) {
   
        const render =   stats.map(item => 
    <li id={item.id} class="item">
                  <span class="label">{item.label}</span>
      <span class="percentage">{ item.percentage}%</span>
    </li>)    
  
    return (
        <section class="statistics">
  <h2 class="title">Upload stats</h2>

            <ul class="stat-list">
                {render}
              </ul>
</section>
  )
}

export default Statistics;
