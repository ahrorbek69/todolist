import React from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/Input/MyInput'

const PostForm = ({createPost,post,setPost,setPosts}) => {
    const addPost = (e) => {
        e.preventDefault()
        const newPost = {
          ...post,
          id: Date.now()  
        }
        createPost(newPost)
        setPost({title: '', body: ''})
      }
  return (
    <form >
    <h4 className=' text-lg text-gray-800 text-center  font-semibold'>Create Your First Post </h4>
    <MyInput type="text"
     className='form-control my-2'
     placeholder='Programming Language' 
     value={post.title}
     onChange={(e)=> setPost({...post , title: e.target.value})}
     
     />
    
    <MyInput type="text"
     className='form-control my-2'
     placeholder='Enter Your Favourite Stack' 
     value={post.body}
     onChange={(e)=> setPost({...post , body: e.target.value})}
     />
    
    <MyButton onClick={addPost}>
      Add Post
    </MyButton>
  </form>
  )
}

export default PostForm