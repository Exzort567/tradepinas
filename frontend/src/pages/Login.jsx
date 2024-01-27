import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import axios from 'axios';
import { URL } from "../url";
import { UserContext } from "../context/UserContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false); // Move this line outside of handleLogin
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post(URL + "/api/auth/login", { email, password }, {withCredentials:true});
            // console.log(res.data);
            setUser(res.data)
            navigate("/");
        } catch (err) {
            setError(true);
            console.log(err);
        }
    };

    return (
        <>
            <div className="flex items-center justify-between px-8 md:px-[200px] py-4 bg-[#ff8906]">
                <h1 className="text-lg md:text-x1 font-extrabold">
                    <Link to="/">Trade Pinas</Link>
                </h1>
                <h3><Link to="/register">Register</Link></h3>
            </div>
            <div className="w-full flex justify-center items-center h-[70vh]">
                <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
                    <h1 className="text-xl font-bold text-left">Login to your account</h1>
                    <input onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border-2 border-black outerline-0" type="text" placeholder="Enter your email" />
                    <input onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border-2 border-black outerline-0" type="password" placeholder="Enter your Password" />
                    <button onClick={handleLogin} className="w-full px-4 py-4 text-lg font-bold bg-black text-white rounded-lg hover:bg-gray-500 hover:text-black">Login</button>
                    {error && <h3 className="text-red-500 text-sm">Something went wrong</h3>}
                    <div className="flex justify-center items-center space-x-2">
                        <p>New here?</p>
                        <p className="text-gray-500 hover:text-black"><Link to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
