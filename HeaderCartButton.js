import CartIcon from '../Cart/CartIcon';
import classes from'./HeaderCartButton.module.css'
export default function HeaderCartButton(props){
    return(
        <button className={classes.button} onClick={props.onshow }>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>0</span>
        </button>
        
    )
}