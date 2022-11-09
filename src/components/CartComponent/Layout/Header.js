import classes from './Header.module.css';
import mealsImage from '../../../assets/doodle.png';
import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <HeaderCartButton  onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Food"></img>
        </div>
    </Fragment>

}

export default Header