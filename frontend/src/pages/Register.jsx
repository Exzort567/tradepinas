import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from 'axios';
import { URL } from "../url";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate()

    const handleRegister = async () => {
        
        try {
            const res = await axios.post(URL + "/api/auth/register", { username, email, password });
            setUsername(res.data.username);
            setEmail(res.data.email);
            setPassword(res.data.password);
            setError(false);
            navigate("/login");

            // Check for a success message or handle success accordingly
            if (res.data.message) {
                console.log(res.data.message);
                // Redirect to a success page or perform other actions
            } else {
                // Handle the case where the response does not contain a success message
            }
        } catch (err) {
            setError(true)
            // Log detailed error information
            console.error("Registration failed:", err);

            // Check if the error response contains detailed error messages
            if (err.response && err.response.data) {
                console.log("Server error details:", err.response.data);
                // Set error state if needed
                setError(err.response.data.error || "Registration failed");
            } else {
                // Handle other error scenarios
                setError("Registration failed");
            }
        }
    };


    
    return (
        <>
        <div className="flex items-center justify-between px-8 md:px-[200px] py-4 bg-[#45A29E]">
            <h1 className="text-lg md:text-x1 font-extrabold">
                <Link to="/">Trade Pinas</Link>
            </h1>
            <h3><Link to="/login">Login</Link></h3>
        </div>
        <div className="auth w-full flex justify-center items-center h-[70vh]">
            <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
                <h1 className="auth_text text-xl font-bold text-left">Create an account</h1>
                <input onChange={(e) => setUsername(e.target.value)} className="inputs w-full px-4 py-2 border-2 border-black outerline-0" type="text" placeholder="Enter your username"/>
                <input onChange={(e) => setEmail(e.target.value)} className="inputs w-full px-4 py-2 border-2 border-black outerline-0" type="text" placeholder="Enter your email"/>
                <input onChange={(e) => setPassword(e.target.value)} className="inputs w-full px-4 py-2 border-2 border-black outerline-0" type="password" placeholder="Enter your Password"/>
                <button onClick={handleRegister} className="button w-full px-4 py-4 text-lg font-bold  text-white ">Register</button>
                {error && <h3 className="text-red-500 text-sm">Something went wrong</h3>}
                <div className="flex justify-center items-center space-x-2">
                    <p className="text-blue-500">Already have an account?</p>
                    <p className="text-blue-500"><Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
        <Footer />
        </>
    
  )
}

export default Register