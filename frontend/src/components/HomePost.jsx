

const HomePost = () => {
    return (
      <div className="common-background w-full flex mt-8 space-x-5 text-white">
        {/* left */}
        <div className="w-[35%] height-[200px] mt-5 flex justify-center items-center">
          <img
            src="https://images.ctfassets.net/jg6lo9a2ukvr/3ed0a5kNektRJU4rGHcT9w/d8c9adc5aa138288b99120a7ff2c77d1/Blog_01122024.png?fm=webp"
            alt=""
            className=""
          />
        </div>
        {/* right */}
        <div className="flex flex-col w-[65%]">
          <h1 className="text-xl font-bold  mt-4 md:mb-2 md:text-2x1">WEEKLY MARKET UPDATE</h1>
          <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
            <p className="">@exzort</p>
            <div className="flex space-x-2">
              <p>01/13/2024</p>
              <p>12:00</p>
            </div>
          </div>
          <p className="text-sm md:text-lg mb-4"> {/* Added mb-4 for a bottom margin */}
            Spot bitcoin ETFs begin trading on US exchanges: On Wednesday, the SEC approved 11 spot
            bitcoin ETFs, and trading launched on Thursday. The approval of US-based spot bitcoin ETFs
            marked a historic day for bitcoin and crypto as a whole, opening the door to an entirely
            new set of retail and institutional investors. As trading started Thursday morning, BTC
            rose to $49k before paring back gains to sit below $45k by Friday morning. Over $4.6
            billion traded across all spot bitcoin ETFs on Thursday, likely setting a record for the
            highest day-one volume for a single type of ETF.
          </p>
        </div>
      </div>
    );
  };
  
  export default HomePost;
  