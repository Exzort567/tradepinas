import {IF} from '../url'


const HomePost = ({post}) => {
 
  
    return (
      <div className="common-background w-full flex mt-8 space-x-5 text-white bg-[#1F2833] ">
        {/* left */}
        <div className="w-[35%] height-[200px] mt-5 flex justify-center items-center">
          <img
            src={IF+post.photo}
            alt=""
            className="photo mb-4 ml-5"
          />
        </div>
        {/* right */}
        <div className="flex flex-col w-[65%]">
          <h1 className="title text-xl font-bold  mt-4 md:mb-2 md:text-2x1">{post.title}</h1>
          <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
            <p className="">@{post.username}</p>
            <div className="date flex space-x-2">
            <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
                <p>{new Date(post.updatedAt).toString().slice(16,24)}</p> {/* Format the updatedAt timestamp */}
            
            </div>
          </div>
          <p className="text-sm md:text-lg mb-4"> {/* Added mb-4 for a bottom margin */}
            {post.desc.slice(0,200)+" ...Read more"}
          </p>
        </div>
      </div>
    );
  };
  
  export default HomePost;
  