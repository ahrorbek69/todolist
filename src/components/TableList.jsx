import React from 'react'
import TableHeader from './TableHeader'
import TableItem from './TableItem'

const TableList = ({posts,title,removePost}) => {
  if(!posts.length){
    return <h1 className=' text-center mt-2 text-2xl text-red-500 font-semibold'>Not Faund </h1>
  }
  return (
    <>
    <h2 className=' text-center font-semibold p-2 text-lg'>{title}</h2>
      <table className="table table-striped">
     <TableHeader />
     <tbody>
      {
        posts.map((post,inx) => (
          <TableItem removePost={removePost} id={inx += 1} post={post}  key={post.id}/>
        ))
      }
     
     </tbody>
    
  </table>
    </>
  )
}

export default TableList