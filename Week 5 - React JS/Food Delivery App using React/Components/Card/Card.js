import React from 'react';
import { add_to_cart_action, increase_number } from '../../Action/Action';
import { useDispatch, useSelector } from 'react-redux';
// import { INCREASE_THE_ITEM } from '../../ActionType';

function Card({props}) {
    const cart = useSelector(state => state.cartItems.cart);

    const dispatch = useDispatch()
    function addtocart(item){
        item.count = 1;
        var flag = 0;
        // console.log(cart.length);
        
        for(var i=0; i<cart.length; i++){
            // console.log(cart[i].id);
            if(cart[i].id === item.id){
                // console.log(cart[i].count+1);
                flag = 1;
                break;
            }
        }
        flag === 0 ? dispatch(add_to_cart_action(item, flag)) : dispatch(increase_number(item, flag));
    }

    return (
        <div className='card mx-auto flex items-center shadow-xl py-6 rounded-md' style={{flexDirection: "column"}}>
            <div className='relative'>
                <img src={props.img} alt="" style={{width: "200px", height: "200px"}} />
                <div className='relative'>
                    <p className='absolute w-full -top-6 text-center text-lg text-white' style={{backgroundColor: "#90ADC6"}}>Price: ₹{props.price}</p>
                </div>
            </div>

            <div className='description text-center'>
                <h2 className='py-2 uppercase font-bold text-xl'>{props.name}</h2>
                <p className='text-left w-4/5 mx-auto text-sm'>{props.des.slice(0, 50)+'...'}</p>
            </div>
            <button onClick={() => addtocart(props)} className='my-2 py-1 px-4 rounded-2xl text-white' style={{backgroundColor: "#333652"}}>Add To Cart</button>
        </div>
    )
}

export default Card
