import React, { useState } from 'react'
import PostForm from './components/PostForm'
import TableList from './components/TableList'
import MyInput from './UI/Input/MyInput'
import MySelect from './UI/mySelect/MySelect'

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

const [select, setSelect] = useState('')
const [search, setSearch]= useState('')

function getSortedPosts(){
  if(select){
    return [...posts].sort((a,b)=> a[select].localeCompare(b[select]))
  }
  return posts
}

const sortedPost = getSortedPosts()


const sortPost = (sort) => {
  setSelect(sort)
  console.log(sort);

}

  return (
    <div className=' w-460 shadow-md rounded-lg p-2'>
      <PostForm createPost={createPost}  posts={posts} setPost={setPost} setPosts={setPosts} post={post}/>
      <div className=' flex  justify-between my-2'>
        <MyInput 
        placeholder='Search...'
        value={search}
        onChange={e => setSearch(e.target.value)}
        className={'form-control mr-2'}
        />
       <MySelect 
       value={select}
       onChange={sortPost}
        defaultValue={'Sorted By'}
        options={[
          {
            value: 'title',name: 'Programming'
          },
          {
            value: 'stack',name: 'Stack'
          },
        ]}
       />
      </div>
      {
        posts.length ?  <TableList removePost={removePost} title={'Programming Language'} posts={sortedPost}/>
        :
        <h1 className=' text-center mt-2 text-2xl text-red-500 font-semibold'>You Should Add Some Post </h1>
      }
     
    </div>
  )
}

export default App