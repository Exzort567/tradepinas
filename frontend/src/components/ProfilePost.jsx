import {IF} from '../url'

const ProfilePost = ({p}) => {
  return (
    <div className="w-full flex mt-8 space-x-5 text-white">
        {/* left */}
        <div className="w-[35%] height-[200px] mt-5 flex justify-center items-center">
          <img
            src={IF+p.photo}
            alt=""
            className=""
          />
        </div>
        {/* right */}
        <div className="flex flex-col w-[65%]">
          <h1 className="text-xl font-bold  mt-4 md:mb-2 md:text-2x1">{p.title}</h1>
          <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
            <p>@{p.username}</p>
            <div className="flex space-x-2">
            <p>{new Date(p.updatedAt).toString().slice(0,15)}</p>
            <p>{new Date(p.updatedAt).toString().slice(16,24)}</p>
            </div>
          </div>
          <p className="text-sm md:text-lg mb-4"> {/* Added mb-4 for a bottom margin */}
            {p.desc}
          </p>
        </div>
      </div>
  )
}

export default ProfilePost