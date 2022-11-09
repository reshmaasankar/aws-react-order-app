import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = props => {

    const cartCtx = useContext(CartContext);
    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    }
    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1})
    }
    const createOrder = () =>{
         fetch("https://h1bj32hhil.execute-api.ap-south-1.amazonaws.com/order_test/order").then(res => res.json()).then(res => {
            console.log('the main data is', res)
            fetch('https://h1bj32hhil.execute-api.ap-south-1.amazonaws.com/order_test/order', { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    order_id: (+res['body']['Items'][0].order_id +1).toString(),
                    no_of_items: res['body']['Items'][0].no_of_items + cartCtx.items.length,
                    no_of_restaurents: res['body']['Items'][0].no_of_restaurents + 1,
                    no_of_current_items: cartCtx.items.length,
                    total_money: (+res['body']['Items'][0].total_money + (+totalAmount)).toString(),
                    delivery_agent: "James Markel"
                }) 
            }).then(result => result.json()).then( result => {
                console.log('result is', result)
                props.onClose();
                alert(result['message'])
            })
        })
    }

    const cartItems = cartCtx.items.map((item) => <CartItem
        onAdd={cartItemAddHandler.bind(null, item)}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        key={item.id} name={item.name}
        amount={item.amount}
        price={item.price} />)
    return (
        <Modal>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes['button']} onClick={createOrder}>Order</button>}
            </div>
        </Modal>

    )
}

export default Cart;