import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './style.css'
function Table() {
 const list =  useSelector(state => state.list);
 const [ids, setIds] = useState([]);
function remove(id){
   setIds([...ids],id) 
}
  return (
    <div className='table-div'>
      <table >
        <tbody>
         {
          list.filter(itm=> ids?!ids.includes(itm.id):true).map(itm => <tr key={itm.id}>
         <td>{itm.value}</td>
         <td><button onClick={remove(itm.id)}>delete</button></td>
         </tr>)
         } 
        </tbody>
        
      </table>
    </div>
  )
}

export default Table
