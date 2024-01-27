import { Link } from "react-router-dom"
import './NavBarStyle.css'
import { GoSearch } from "react-icons/go";
import { HiMiniBars3 } from "react-icons/hi2";
import { useContext, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
    const [menu, setMenu] = useState(false)

    const showMenu = () => { 
        setMenu(!menu)
    }

    const {user} = useContext(UserContext)
    
  return (
    <div className="flex items-center justify-between px-8 md:px-[200px] py-4 bg-[#ff8906]">
        <h1 className="text-lg md:text-x1 font-extrabold">
            <Link to="/">Trade Pinas</Link>
        </h1>
    <div className="flex justify-ceanter items-center space-x-0">
        <p><GoSearch/></p>
        <input className="outline-none px-3" placeholder="Search a post" type="text"/>
    </div>
    <div className="hidden md:flex items-center justify-center md:space-x-4">
        {user? <h3><Link to="/write">Write</Link></h3>:<h3><Link to="/login">Login</Link></h3>}
        {user? <div onClick={showMenu}>
            <p className="cursor-pointer"><HiMiniBars3 /></p>
            {menu && <Menu/>} 
             </div>:<h3><Link to="/register">Register</Link></h3>}
    </div>
    <div onClick={showMenu} className="md:hidden">
        <p className="cursor-pointer"><HiMiniBars3 /></p>
        {menu && <Menu/>} 
    </div>

    </div>
  )
}

export default Navbar