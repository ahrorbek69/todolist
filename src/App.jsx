import React, { useState } from 'react'
import PostForm from './components/PostForm'
import TableList from './components/TableList'

const App = () => {
const [posts,setPosts]=useState([
  {id:1,title: 'Pyton',stack: 'Full-stack'},
  {id:2,title: 'Java',stack: 'Mobile-stack'},
  {id:3,title: 'C#',stack: 'Full-stack'},
  {id:4,title: 'Ruby',stack: 'Cyber'},
])

const [post, setPost] = useState({title: '', stack: ''})

const createPost = (newPost) => {
  setPosts([...posts,newPost])
}
const removePost = (post) => {
setPosts(posts.filter(s => s.id !== post.id))
}


// const [title , setTitle] = useState('')
// const [stack , setStack] = useState('')


  return (
    <div className=' w-460 shadow-md rounded-lg p-2'>
      <PostForm createPost={createPost}  posts={posts} setPost={setPost} setPosts={setPosts} post={post}/>
      {
        posts.length ?  <TableList removePost={removePost} title={'Programming Language'} posts={posts}/>
        :
        <h1 className=' text-center mt-2 text-2xl text-gray-500'>You Should Add Some Post </h1>
      }
     
    </div>
  )
}

export default App