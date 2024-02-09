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
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post(URL + "/api/auth/login", { email, password }, { withCredentials: true });
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
            <div className="flex items-center justify-between px-8 md:px-[200px] py-4 bg-[#45A29E]">
                <h1 className="text-lg md:text-x1 font-extrabold">
                    <Link to="/">Trade Pinas</Link>
                </h1>
                <h3><Link to="/register">Register</Link></h3>
            </div>
            <div className="auth w-full flex justify-center items-center h-[70vh]" style={{ backgroundColor: "#0B0C10", marginBottom: "-50px" }}>
                <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
                    <h1 className="auth_text text-xl font-bold text-left" style={{ color: "aqua" }}>Login to your account</h1>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="inputs w-full px-4 py-2 border-2 border-black outerline-0"
                        type="text"
                        placeholder="Enter your email"
                        style={{ borderRadius: "10px" }}
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="inputs w-full px-4 py-2 border-2 border-black outerline-0"
                        type="password"
                        placeholder="Enter your Password"
                        style={{ borderRadius: "10px" }}
                    />
                    <button
                        onClick={handleLogin}
                        className="button w-full px-4 py-4 text-lg font-bold text-white"
                        style={{ backgroundColor: "#45A293", borderRadius: "12px" }}
                    >
                        Login
                    </button>
                    {error && <h3 className="text-red-500 text-sm">Something went wrong</h3>}
                    <div className="flex justify-center items-center space-x-2">
                        <p className="text-blue-500">New here?</p>
                        <p className="text-blue-500 hover:text-gray"><Link to="/register">Register</Link></p>
                    </div>
                    <p className="demo" style={{ color: "aqua" }}>email: demo@gmail.com password: demo</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
