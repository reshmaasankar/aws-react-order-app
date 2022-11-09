import './Navbar.css';
import NoMealsTwoToneIcon from '@mui/icons-material/NoMealsTwoTone';
import RestaurantTwoToneIcon from '@mui/icons-material/RestaurantTwoTone';
import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';
import MapTile from '../../UI/MapTile/MapTile';
import Home from '../Home/Home';
import Header from '../Header/Header';
import profileImage from '../../assets/user1.png';
import call from '../../assets/call.png';
import msg from '../../assets/msg.png';
import Carousel from '../../UI/Carousel';
import Slideshow from '../../UI/Slideshow';
import React, { useState, useEffect } from 'react';
import pasta from '../../assets/pasta.png';
import burger from '../../assets/burger.png';
import pizza from '../../assets/pizza.png';
import sadya from '../../assets/sadya.png';



function Navbar() {
    const [mainData, setMainData] = useState({
        food_ordered: 0,
        res_explored: 0,
        total_spent: 0,
        agent_name: 'James Parker'
    })
    useEffect(() => {
        // fetch("https://h1bj32hhil.execute-api.ap-south-1.amazonaws.com/order_test/order").then(res => res.json()).then(res => {
        //     console.log('the main data is', res)
        //     setMainData({
        //         food_ordered: res['body']['Items'][0].no_of_items,
        //         res_explored: res['body']['Items'][0].no_of_restaurents,
        //         total_spent: res['body']['Items'][0].total_money,
        //         agent_name: res['body']['Items'][0].delivery_agent
        //     })
        // })
    }, [])

    return (
        <div className='Navbar'>
            <div className="heading">
                <div className="page-heading">
                    <p>Pages /  Dashboard</p>
                    <p> Main Dashboard</p>
                </div>
                <div className='page-search'>
                    <Header />
                </div>
            </div>
            <div className='map_details'>
                <div className='map-sec'>
                    <MapTile />
                    <div className='top_layer'>
                        <Carousel show={2}>
                            <div>
                                <div style={{ padding: 8 }}>
                                    <div className='order-details'>
                                        <div className='icon'>
                                            <div className='meal'>
                                                <NoMealsTwoToneIcon />
                                            </div>
                                        </div>
                                        <div className='details'>
                                            <p>Food orders</p>
                                            <p>{ mainData.food_ordered}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ padding: 8 }}>
                                    <div className='order-details'>
                                        <div className='icon'>
                                            <div className='meal'>
                                                <RestaurantTwoToneIcon />
                                            </div>
                                        </div>
                                        <div  className='details'>
                                            <p>Restaurants explored</p>
                                            <p>{mainData.res_explored}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ padding: 8 }}>
                                    <div className='order-details'>
                                        <div className='icon'>
                                            <div className='meal'>
                                                <PaidTwoToneIcon />
                                            </div>
                                        </div>
                                        <div className='details'>
                                            <p>Total spent</p>
                                            <p>{mainData.total_spent}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className="detail_sec">
                    <div className="deliver_det">
                        <p className='title_dec'>Last order</p>
                        <div className='underline'></div>
                        <div className='order_details'>
                            <img className='user_image' src={profileImage} alt="user"></img>
                            <div className='delivery_name'>
                                <p>{mainData.agent_name}</p>
                                <p>Maruti Suzuki</p>
                            </div>
                            <div className='delivery_details'>
                                <p>4.8</p>
                                <p>KL 234567</p>
                            </div>
                        </div>
                        <div className='support'>
                            <div>
                                <img className='call' src={call} alt="call"></img>
                                <img className='call' src={msg} alt="message"></img>
                            </div>
                        </div>
                    </div>
                    <div className="deliver_det">
                        <p className='title_dec'>Most ordered items</p>
                        <div className='underline'></div>
                         <div className='mid-bar'>
                            <div className='panel-sec'>
                            <Slideshow>
                                <div className="panel active"
                                        style={{ backgroundImage: `url(${pasta})` }}>
                                    <h3>Pasta</h3>
                                </div>
                                <div className="panel"
                                        style={{ backgroundImage: `url(${burger})` }}>
                                    <h3>Burger</h3>
                                </div>
                                <div className="panel"
                                    style= {{ backgroundImage : `url(${pizza})` }}>
                                    <h3>Pizza</h3>
                                </div>
                                <div className="panel"
                                    style= {{ backgroundImage : `url(${sadya})`}}>
                                    <h3>Sadya</h3>
                                </div>
                                </Slideshow>
                            </div>
                        </div>
                    </div>
                    <div className="deliver_det">
                        <p className='title_dec'>Order frequency</p>
                        <div className='underline'></div>
                        <div className='end-sec'>
                            <Home />
                        </div>
                   </div>
                </div>  
            </div>
        </div>
    )
}

export default Navbar;