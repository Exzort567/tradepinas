

const Footer = () => {
  return (
    <>
    <div className="mt-8 w-full bg-black px-8 md:flex md:flex-row flex-col items-start space-y-4 md:space-y-0 md:justify-between text-sm md:text-md py-8">
        <div className="flex flex-col text-white">
            <p>Featured Blog</p>
            <p>Most Likes</p>
            <p>Readers Choice</p>
        </div>

        <div className="flex flex-col text-white">
            <p>Forum</p>
            <p>Support</p>
            <p>Recent Post</p>
        </div>

        <div className="flex flex-col text-white">
            <p>Privacy Policy</p>
            <p>About Us</p>
            <p>Terms and Conditions</p>
        </div>

    </div>
    <p className="py-2 pb-2 text-center text-white bg-black">All rights reversed @TradePinas 2024</p>
    </>
  )
}

export default Footer