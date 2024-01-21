import Footer from "../components/Footer"
import HomePost from "../components/HomePost"
import Navbar from "../components/Navbar"


function Home() {
  
  return (
   
    <>
      <Navbar />
     <div className="px-8 md:px-[200px] bg-[#0f0e17]" style={{ marginTop: '0px', marginBottom: '-35px' }}>\

        <HomePost />
        <HomePost />
        <HomePost />
        <HomePost />
        <HomePost />
        <HomePost />
        
    </div>
    <Footer />
    </>  
        
  )
}

export default Home