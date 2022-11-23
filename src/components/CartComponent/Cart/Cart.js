import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  let nameArr = ['James Mrakerl', 'Chako Paul', 'Vincent Churchil'];

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const createOrder = () => {
    fetch(
      'https://h1bj32hhil.execute-api.ap-south-1.amazonaws.com/order_test/order'
    )
      .then((res) => res.json())
      .then((res) => {
        console.log('the main data is', res);
        var max = res['body']['Items'].reduce(function (prev, current) {
          if (+current.order_id > +prev.order_id) {
            return current;
          } else {
            return prev;
          }
        });
        fetch(
          'https://h1bj32hhil.execute-api.ap-south-1.amazonaws.com/order_test/order',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              order_id: (+max.order_id + 1).toString(),
              no_of_items: max.no_of_items + cartCtx.items.length,
              no_of_restaurents: max.no_of_restaurents + 1,
              no_of_current_items: cartCtx.items.length,
              total_money: (+max.total_money + +totalAmount).toString(),
              delivery_agent:
                nameArr[Math.floor(Math.random() * nameArr.length)],
            }),
          }
        )
          .then((result) => result.json())
          .then((result) => {
            console.log('result is', result);
            props.onClose();
            cartCtx.items.forEach((e) => {
              cartCtx.removeItem(e.id);
            });
            alert(result['message']);
          });
      });
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      onAdd={cartItemAddHandler.bind(null, item)}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
    />
  ));
  return (
    <Modal>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button className={classes['button']} onClick={createOrder}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
