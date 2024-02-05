import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { URL, IF } from "../url";
import { UserContext } from "../context/UserContext";
import Navbar from "../components/Navbar";
import Comment from "../components/Comment";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const PostDetails = () => {
    // State variables
    const postId = useParams().id;
    const [post, setPost] = useState({});
    const { user } = useContext(UserContext);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    // Functions
    const fetchPost = async () => {
        setLoader(true);
        try {
            const res = await axios.get(URL + "/api/posts/" + postId);
            setPost(res.data);
            setLoader(false);
        } catch (err) {
            console.log("Error fetching post:", err);
            setLoader(true);
        }
    };

    const handleDeletePost = async () => {
        try {
            const res = await axios.delete(URL + "/api/posts/" + postId, { withCredentials: true });
            console.log(res.data);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    const fetchPostComments = async () => {
        setLoader(true);
        try {
            const res = await axios.get(URL + "/api/comments/post/" + postId);
            setComments(res.data);
            setLoader(false);
        } catch (err) {
            setLoader(true);
            console.log(err);
        }
    };

    const postComment = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(URL + "/api/comments/create",
                { comment: comment, author: user.username, postId: postId, userId: user._id },
                { withCredentials: true });

            // fetchPostComments();
            // setComment("");
            window.location.reload(true);
        } catch (err) {
            console.log(err);
        }
    };

    // Effects
    useEffect(() => {
        fetchPost();
    }, [postId]);

    useEffect(() => {
        fetchPostComments();
    }, [postId]);

    // Render
    return (
        <div className="post">
            <Navbar />
            {loader ? <div className=" h-[40vh] flex justify-center items-center"><Loader /></div> :
                <div className="px-8 md:px-[200px0 mt-8">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2x1 font-bold md:text-3xl">{post.title}</h1>
                        {user?._id === post?.userId &&
                            <div className="flex items-center justify-center space-x-2">
                                <p className="cursor-pointer" onClick={() => navigate("/edit/" + [postId])}><BiEdit /></p>
                                <p className="cursor-pointer" onClick={handleDeletePost}><MdDelete /></p>
                            </div>}
                    </div>
                    <div className="flex items-center justify-between mt-2 md:mt-4">
                        <p className="">@{post.username}</p>
                        <div className="flex space-x-2">
                            <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
                            <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
                        </div>
                    </div>

                    <img src={IF + post.photo} className="w-full mx-auto mt-8" style={{ width: '750px' }} alt="" />
                    <p className="mx-auto mt-8">
                        {post.desc}
                    </p>
                    <div className="flex items-center mt-8 space-x-4 font-semibold">
                        <p>Categories:</p>
                        <div className="flex justify-center items-center space-x-2">
                            {post.categories?.map((c, i) => (
                                <div key={i} className="bg-gray-300 rounde-lg px-3 py-1">{c}</div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col mt-4">
                        <h3 className="mt-6 mb-4 font-semibold">Comments: </h3>
                        {comments?.map((c) => (
                            <Comment key={c._id} c={c} post={post} />
                        ))}
                    </div>
                    <div className="flex flex-col mt-4 md:flex-row">
                        <input onChange={(e) => setComment(e.target.value)} type="text" placeholder="Write a comment" className="md:w-[90%] outline-non px-4 mt-4 md:mt-0" />
                        <button onClick={postComment} className="button px-4 py-2 md:w-[10%] mt-4 md:mt-0">Add a comment</button>
                    </div>
                </div>}
            <Footer />
        </div>
    );
};

export default PostDetails;
