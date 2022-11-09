import Sidebar from "../Sidebar/Sidebar";
import './Dashboard.css';

const Dashboard = (props) => {
    return <div className='mainContainer'>
        <div className="sidebar">
            <Sidebar />
        </div>
        
        <div className="main">
            {props.children}
        </div>
    </div>
}
export default Dashboard;