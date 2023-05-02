import Modal from '../UI/Modal'
import classes from './Cart.module.css'
export default function Cart(props){
    return(
        <Modal>
            <h3>sushi</h3>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>300</span>
            </div>
            <div className={classes.actions}> 
                <button className={classes['button-alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}