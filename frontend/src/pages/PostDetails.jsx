import Comment from "../components/Comment"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'

const PostDetails = () => {
  return (
    <div className="">
        <Navbar />
        <div className="px-8 md:px-[200px0 mt-8">
        <div className="flex justify-between items-center">
            <h1 className="text-2x1 font-bold text-black md:text-3xl">WEEKLY MARKET UPDATE</h1>
        <div className="flex items-center justify-center space-x-2">
            <p><BiEdit /></p>
            <p><MdDelete /></p>
        </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
            <p className="">@exzort</p>
            <div className="flex space-x-2">
              <p>01/13/2024</p>
              <p>12:00</p>
            </div>
        </div> 
        
        <img src="https://images.ctfassets.net/jg6lo9a2ukvr/3ed0a5kNektRJU4rGHcT9w/d8c9adc5aa138288b99120a7ff2c77d1/Blog_01122024.png?fm=webp" className="w-full mx-auto mt-8" alt=""/>
        <p className="mx-auto mt-8">
            Spot bitcoin ETFs begin trading on US exchanges: On Wednesday, the SEC approved 11 spot
            bitcoin ETFs, and trading launched on Thursday. The approval of US-based spot bitcoin ETFs
            marked a historic day for bitcoin and crypto as a whole, opening the door to an entirely
            new set of retail and institutional investors. As trading started Thursday morning, BTC
            rose to $49k before paring back gains to sit below $45k by Friday morning. Over $4.6
            billion traded across all spot bitcoin ETFs on Thursday, likely setting a record for the
            highest day-one volume for a single type of ETF.</p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories:</p>
            <div className="flex justify-center items-center space-x-2">
                <div className="bg-gray-300 rounde-lg px-3 py-1">
                    Crypto
                </div>
                <div className="bg-gray-300 rounde-lg px-3 py-1">
                    Forex
                </div>
                <div className="bg-gray-300 rounde-lg px-3 py-1">
                    Stock
                </div>
            </div>
        </div>
        <div className="flex flex-col mt-4">
                <h3 className="mt-6 mb-4 font-semibold">Comments: </h3>  
                <Comment/>
                <Comment/>
                
                </div>
                {/* write a comment */}
                <div className="flex flex-col mt-4 md:flex-row">
                    <input type="text" placeholder="Write a comment" className="md:w-[90%] outline-non px-4 mt-4 md:mt-0"/>
                    <button className="bg-black text-white px-4 py-2 md:w-[10%] mt-4 md:mt-0">Add a comment</button>
                </div>
        </div>
        <Footer />
    </div>
  )
}

export default PostDetails