import React from 'react';
import { Link } from 'react-router-dom'

function Checkout() {
    return (
        <>
            <div>
                <div >
                    <Link to="/cart">
                        <button type="button" className="btn btn-primary btn-sm add" >Terminar mi compra</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Checkout;