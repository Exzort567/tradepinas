import { useContext, useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { UserContext } from "../context/UserContext"
import { URL } from "../url"
import axios from "axios"
import HomePost from "../components/HomePost"
import { Link, useLocation } from "react-router-dom"
import Loader from "../components/Loader"


const MyBlogs = () => {
    const {search} = useLocation()
  // console.log(search)

  const [posts,setPosts] = useState([])
  const [noResults,setNoResults] = useState("false")
  const [loader,setLoader] = useState(false)
  const {user} = useContext(UserContext)
  // console.log(user)

  const fetchPosts = async () => {
    setLoader(true)
    try{
        const res=await axios.get(URL+"/api/posts/user/"+user._id)
        // console.log(res.data)
        setPosts(res.data)
        if(res.data.length===0){
          setNoResults(true)
        }
        else{
          setNoResults(false)
        }
        setLoader(false)
        
      }
      catch(err){
        console.log(err)
        setLoader(true)
      }
    }
  
  
  useEffect(() => {
    fetchPosts()
  },[search])
  return (
    <div>
        <Navbar />
        <div className="px-8 md:px-[200px] min-h-[80vh] bg-[#0f0e17]" style={{ marginTop: '0px', marginBottom: '-35px' }}>\ 
        {loader?<div className="h-[40vh] flex justify-center items-center"><Loader /></div>:!noResults?posts.map((post)=>(
          <>
            <Link to={user ? `/posts/post/${post._id}` : "/login"}>
              <HomePost key={post._id} post={post} />
            </Link>
          </>
          
          
        )):<h3 className="text-center font-bold mt-16 text-white">No post found :(</h3>}
        </div>
        <Footer />
    </div>
  )
}

export default MyBlogs