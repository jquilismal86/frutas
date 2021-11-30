import React from 'react';
import './Checkout.css';
import Ecomm from '../../assets/images/ecommerce2.jpg';
import { CheckoutProduct } from '../CheckoutProduct/CheckoutProduct';
import { Subtotal } from '../Subtotal/Subtotal';
import { useStateValue } from '../StateProvider/StateProvider';

const Checkout = () => {
    const [{ basket }] = useStateValue();

    return (
        <div className="container">
            <div className="checkout">
                <div className="checkout__left">
                    <img src={Ecomm} alt="" className="checkout__ad" />
                    <div>
                        <h4 className="checkout__title">
                            Carrito de compras!
                        </h4>
                        {basket.map((item) => (

                            <CheckoutProduct
                                key={item.id}
                                name={item.name}
                                brief={item.brief}
                                pricePound={item.pricePound}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>
                <div className="checkout__right">
                    <Subtotal />
                </div>
            </div>
        </div>
    )
}

export { Checkout };
