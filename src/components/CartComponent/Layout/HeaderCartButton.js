import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {

    const [btnHighlighted, setBtnHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    useEffect(() => {
        if(cartCtx.items.length === 0) {
            return;
        }
        setBtnHighlighted(true);
        const timer = setTimeout(() => {
            setBtnHighlighted(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        };

    }, [cartCtx])

    const numberOfCartItems = cartCtx.items.reduce((cur, item) => {
        return cur + item.amount
    }, 0)

    const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ''}`

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>


}

export default HeaderCartButton;