import React from 'react';
import empty from '../../assest/empty.png';
function EmptyCart( ) {
    return (
      <div class="h-screen w-4/4 h-3/6 flex justify-center ">
        <img src={empty} alt="" className='w-full h-full' />
      </div>
    );
}

export default EmptyCart;