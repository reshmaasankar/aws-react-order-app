import './Sidebar.css';
import { SidebarData } from './SidebarData';
import { NavLink } from "react-router-dom";
import Profile from '../../UI/Profile';
import UserRating from '../../UI/UserRating';

const Sidebar = () => {
    return <>
        <div className="Sidebar">
            <div className="profile-sec">
                <Profile />
                <UserRating />
            </div>
            <ul className='SidebarList'>
                {SidebarData.map((val, key) => {
                    return (
                        <li className='list' key={key}>
                            <span className='icon_sec'>{val.icon}</span>
                            <NavLink className='navlink' to={val.link}>{val.title}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    </>
}
export default Sidebar;