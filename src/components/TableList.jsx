import React from 'react'
import { TransitionGroup, CSSTransition} from 'react-transition-group'
import TableItem from './TableItem'
import '../style/style.css'

const TableList = ({posts,title,removePost}) => {
  if(!posts.length){
    return <h1 className=' text-center mt-2 text-2xl text-red-500 font-semibold'>Not Faund </h1>
  }
  return (
    <>
    <h2 className=' text-center font-semibold p-2 text-lg'>{title}</h2>
    <TransitionGroup>
    {
      posts.map((post,inx)=>(
        <CSSTransition
          key={post.id}
          timeout={300}
          classNames="item"
          >
        <TableItem removePost={removePost} id={inx += 1} post={post}/>
        </CSSTransition>
      ))
    }
    </TransitionGroup>




      {/* <table className="table table-striped">
     <TableHeader />
     <tbody>
      <TransitionGroup>
      {
        posts.map((post,inx) => (
          <CSSTransition
          key={post.id}
          timeout={200}
          classNames="item"
          >
            <TableItem removePost={removePost} id={inx += 1} post={post}/>
          </CSSTransition>
        ))
      }
      </TransitionGroup>
     
     </tbody>
    
  </table> */}
    </>
  )
}

export default TableList