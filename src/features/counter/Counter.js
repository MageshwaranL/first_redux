import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { increment,decrement,reset,incrementbyamount } from './counterSlice';
const Counter = () => {
    const count=useSelector((state)=>state.counter.count);
    const dispatch=useDispatch();
    const [incrementamount,setIncrementAmount]=useState(0);
    const addValue=Number(incrementamount) || 0;
   
  return (
    <section>
       <p><center>{count}</center></p>
       <button onClick={()=>dispatch(increment())} className='btn btn-success form-control'>+</button>
       <br></br><br></br>
       <button onClick={()=>dispatch(decrement())} className='btn btn-danger form-control'>-</button>
       <br></br>
       <input type="number" value={incrementamount} onChange={(e)=>setIncrementAmount(e.target.value)} className='form-control'></input>
       <br></br>
       <button onClick={()=>dispatch(incrementbyamount(addValue))} className='btn btn-primary'>add amount</button>
       <button onClick={()=>{
         setIncrementAmount(0);
         dispatch(reset())
        }} className='btn btn-danger'>Reset</button>
    </section>
    
    
  )
}

export default Counter