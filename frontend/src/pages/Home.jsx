import axios from "axios"
import Footer from "../components/Footer"
import HomePost from "../components/HomePost"
import Navbar from "../components/Navbar"
import { URL } from "../url"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Loader from "../components/Loader"


function Home() {

  const {search} = useLocation()
  // console.log(search)

  const [posts,setPosts] = useState([])
  const [noResults,setNoResults] = useState("false")
  const [loader,setLoader] = useState(false)

  const fetchPosts = async () => {
    setLoader(true)
    try {
      const res = await axios.get(URL+"/api/posts/"+search) 
      // console.log(res.data)
      setPosts(res.data)
      if(res.data.length===0){
        setNoResults(true)
      }
      else{
        setNoResults(false)
      }
      setLoader(false) 
    } catch (err) {
      console.log(err)
      setLoader(true)
    }
  }
  
  useEffect(() => {
    fetchPosts()
  },[search])
  
  return (
   
    <>
      <Navbar />
     <div className="px-8 md:px-[200px] min-h-[80vh] bg-[#0f0e17]" style={{ marginTop: '0px', marginBottom: '-35px' }}>\

        {loader?<div className="h-[40vh] flex justify-center items-center"><Loader /></div>:!noResults?posts.map((post)=>(
          <HomePost key={post.id} post={post} />
        )):<h3 className="text-center font-bold mt-16 text-white">No post found :(</h3>}
        
    </div>
    <Footer />
    </>  
        
  )
}

export default Home