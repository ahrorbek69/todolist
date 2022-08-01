import React from 'react'

const TableItem = (props) => {
  return (
    <div className=' shadow-sm rounded-md flex justify-center text-center border items-center flex-col m-2 p-2 border-l-sky-800'>
       <b  scope="row">{props.id}</b> 
       <div className=' text-center text-lg font-semibold flex mx-2 min-w-[20%] flex-1'>
       <p>{props.post.title}</p>
       </div>
       <div className=' w-full h-1 my-2 bg-slate-800'></div>
       <div className=' flex text-center mb-2 min-w-[20%] flex-1'>
       <p>{props.post.body}</p>
       </div>

       <p><button onClick={()=>props.removePost(props.post)} className='btn btn-danger'>Delete</button></p>
    </div>




      // <tr>
      //   <th  scope="row">{props.id}</th> 
      //   <td>{props.post.title}</td>
      //   <td>{props.post.stack}</td>
      //   <td><button onClick={()=>props.removePost(props.post)} className='btn btn-danger'>Delete</button></td>
      // </tr>
  )
}

export default TableItem