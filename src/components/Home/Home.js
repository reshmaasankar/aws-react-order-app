import React from 'react';
import './Home.css';
import PieChart from '../Charts/PieChart';

function Home() {
  const data = [
    { value: 40, month: 'January' },
    { value: 25, month: 'February' },
  ];
  return (
    <div className="Home">
      <div className="chart-section">
        <div className="pie-chart">
          <PieChart data={data} />
        </div>
      </div>
    </div>
  );
}

export default Home;
