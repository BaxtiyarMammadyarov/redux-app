import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { addList } from '../../redux/action/list.action';
import './style.css'
function Form() {

 const dispatch = useDispatch()
 const [data, setData] = useState({id : "", value:""});
 const ids =useSelector(state => state.list.length)
 const [id, setIds] = useState(ids);
 function add(e){
  e.preventDefault();
       dispatch(addList({...data}))
       setData ({id : "",value : ""})
       setIds(id+1)

 }
  return (
    <div className='form-div'>
     <form className='form'>
    <input value={data.value} onChange ={(e)=> setData({...data, value : e.target.value , id  : ids})} />
    <button onClick={(e)=>add(e)}> add to list</button>
      
    </form>
    </div>
  
  )
}

export default Form
