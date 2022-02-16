import Checkout from './Checkout';
import { useContext} from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom'

function Cart() {
    const context = useContext(CartContext);

    return (
    <div className='cart-container'>
            <div className='divTitle'><h2>Carrito de compras</h2></div>
                {
                context.cartList.length > 0 ?
                    <div className='divContainer'>
                        <div>
                            <button type="button" className="btn btn-danger btn-sm add" onClick={context.removeItems}>Remover todos los productos</button>
                        </div>
                        <div>
                            <Link to="/">
                                <button type="button" className="btn btn-primary btn-sm add" >Continuar compra</button>
                            </Link>    
                        </div>
                    </div>
                    :<div></div>
                }
            {
            context.cartList.length > 0 ? 
            context.cartList.map(item =>
                <div className='left cart-item'>
                    <div className='div-box'>
                        <img className='image-box' src={item.imgItem} alt={item.imgItem}/>
                    </div>
                    <div className='about'>
                        <h4>{item.nameItem}</h4>
                        <button type="button" className="btn btn-primary btn-sm add" onClick={() => context.removeItem(item.idItem)}>Remover producto</button>
                    </div>
                    <div className='count'>Unidades: {item.countItem}</div>
                    <div className='price'>Precio c/u: $ {item.costItem} </div>
                    <div className='price'>Subtotal: $ {item.subTotalItem}</div>
                </div>
            ) 
            :   <div className='divTitle'>Carrito Vacío</div>
            }
            {
            context.cartList.length > 0 ?
                    <div className='right '>
                        <h4>Subtotal: $ {context.accumAmount()}</h4>
                        <p>Descuentos: - $ 0</p>
                        <h4>Total: $ {context.accumAmount()}</h4>
                        <Checkout />
                    </div>
                    :
                    <div></div>
            }
    </div>
    );
}

export default Cart;