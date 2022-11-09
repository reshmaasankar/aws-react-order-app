import React from 'react'
import './Home.css';
import PieChart from '../Charts/PieChart';

function Home() {

    const data = [
        { value: 40 },
        { value: 25 },
        { value: 15 },
        { value: 8 },
        { value: 2 }
    ];
    return (
        <div className='Home'>
            <div className='chart-section'>
                <div className='pie-chart'>
                    <PieChart data={data} />
                </div>
            </div>

        </div>
    )
}

export default Home;