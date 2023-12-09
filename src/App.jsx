import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useLocation, Routes, Route } from 'react-router-dom'

function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])

  const location = useLocation()
  const {pathname} = location
  //console.log(pathname)

  const Home = () => {
    return(
      <div>
        <h1>Home</h1>
      </div>
    )
  }

  const Users = () => {
    return(
      <div>
        <h1>Users</h1>
      </div>
    )
  }
  
  const Posts = () => {
    return(
      <div>
        <h1>Posts</h1>
      </div>
    )
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const {data} = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
      setUsers(data)
    }
    fetchUsers()
  })

  useEffect(() => {
    const fetchPosts = async () => {
      const {data} = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts')
      setPosts(data)
    }
    fetchPosts()
  })
  

  return (
    
      <div>
        <nav>
        <Link to='/' className={pathname === "/" ? "selected" : ""}>Home</Link>
        <Link to='/users' className={pathname === "/users" ? "selected" : ""}>Users - {users.length}</Link>
        <Link to='/posts' className={pathname === "/posts" ? "selected" : ""}>Posts - {posts.length}</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/posts' element={<Posts/>}/>
        </Routes>
   
      </div>

    
  )
}

export default App
