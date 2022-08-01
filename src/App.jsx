import React, { useEffect, useMemo, useState } from 'react'
import PostAPI from './API/PostAPI'
import FilterAddSearch from './components/FilterAddSearch'
import PostForm from './components/PostForm'
import TableList from './components/TableList'
import { usePosts } from './hooks/useCreatePost'
import { useFetching } from './hooks/useFetching'
import MyButton from './UI/button/MyButton'
import MyModal from './UI/modal/MyModal'

const App = () => {
    const [posts, setPosts] = useState([])
  const [post, setPost] = useState({ title: '', body: '' })
  const [modal,setModal] = useState (false)
  const [totalcount,setTotalCount] = useState(0)
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [fetchPosts,loading,postErr]= useFetching(async ()=>{
    const response = await PostAPI()
    setPosts(response.data)
    // setTotalCount(response.headers[])
  })

  useEffect(() => {
    fetchPosts()
  },[])

//  const fetchPosts = async () => {
//   setLoading(true)
//    const post = await PostAPI()
//     setPosts(post)
//     setLoading(false)
//   }





  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(s => s.id !== post.id))
  }

  const sortedAndSearchPosts = usePosts(posts,filter.sort,filter.query)
 



  // const sortedPost = SortedPosts


  return (
    <div className=' w-460 shadow-md rounded-lg p-2'>
      <button className='btn btn-success' onClick={fetchPosts}>Add</button>

    <MyButton onClick={()=> setModal(true)} className='btn btn-primary w-auto'>Add Post</MyButton>
    <MyModal visible={modal} setVisible={setModal}>
       <PostForm createPost={createPost} posts={posts} setPost={setPost} setPosts={setPosts} post={post} />
    </MyModal>



      <FilterAddSearch filter={filter} setFilter={setFilter} />
{
 postErr && <h1>Raxmat Error</h1>
}
{
  loading 
  ? <h1 className=' text-red-600 text-2xl text-center'>Loading...</h1>
  : <TableList removePost={removePost} title={'Programming Language'} posts={sortedAndSearchPosts} />

}


    </div>
  )
}

export default App