import classes from './Header.module.css';
import NotificationsTwoToneIcon from '@mui/icons-material/NotificationsTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import LocalParkingTwoToneIcon from '@mui/icons-material/LocalParkingTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

const Header = () => {
    console.log('coming twice')
    return <>
        {/* <header className={classes.header}>
            <div className={classes['header-list']}>
                <img className={classes.image} src={mImage} alt="logo"></img>
                <h1 className={classes['meals-title']}>MealsZo</h1>
            </div>
            <div className={classes['header-list']}>
                <img className={classes.image} src={profileImage} alt="logo_image"></img>
            </div>
        </header> */}
        <div className={classes['search-bar']}>
            <div className={classes.search_text}>
                <SearchTwoToneIcon />
                {/* <input className={classes.input_field} type="text" placeholder="Search ..." /> */}
                <span>Search ...</span>
            </div>
            <div className={classes.icons}>
                <div className={classes.search_images}>
                <NotificationsTwoToneIcon />
            </div>
            <div className={classes.search_images}>
                <InfoTwoToneIcon />
            </div>
            <div className={classes.search_images}>
                <WbSunnyTwoToneIcon />
            </div>
            <div className={classes.search_images_usericon}>
                <LocalParkingTwoToneIcon />
            </div>
            </div>
            
        </div>
    </>

}

export default Header;