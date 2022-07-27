import React, { useMemo, useState } from 'react'
import FilterAddSearch from './components/FilterAddSearch'
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

const [filter, setFilter] = useState({sort: '', query: ''})

const SortedPosts = useMemo(()=>{
  console.log('render');
  if(filter.sort){
    return [...posts].sort((a,b)=> a[filter.sort].localeCompare(b[filter.sort]))
  }
  return posts
},[filter.sort, posts])
  
const sortAndSearchPosts = useMemo(()=>{
return  SortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase()))
},[filter.query,SortedPosts])

// const sortedPost = SortedPosts


  return (
    <div className=' w-460 shadow-md rounded-lg p-2'>
      <PostForm createPost={createPost}  posts={posts} setPost={setPost} setPosts={setPosts} post={post}/>
      

      <FilterAddSearch  filter={filter} setFilter={setFilter}/>


      {
        sortAndSearchPosts.length ?  <TableList removePost={removePost} title={'Programming Language'} posts={sortAndSearchPosts}/>
        :
        <h1 className=' text-center mt-2 text-2xl text-red-500 font-semibold'>You Should Add Some Post </h1>
      }
     
    </div>
  )
}

export default App