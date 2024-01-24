
const Menu = () => {
const user = false
  return (

    <div className="bg-black w-[200px] flex flex-col items-start absolute top-12 right-4 rounded-md p-4">
        {!user && <h3 className="text-white text-lg hover:text-gray-500 cursor-pointer">Login</h3>}
        {!user && <h3 className="text-white text-lg hover:text-gray-500 cursor-pointer">Register</h3>}
        {user && <h3 className="text-white text-lg hover:text-gray-500 cursor-pointer">Profile</h3>}
        {user && <h3 className="text-white text-lg hover:text-gray-500 cursor-pointer">Write</h3>}
        {user && <h3 className="text-white text-lg hover:text-gray-500 cursor-pointer">My Blogs</h3>}
        {user && <h3 className="text-white text-lg hover:text-gray-500 cursor-pointer">Logout</h3>}
    </div>
  )
}

export default Menu