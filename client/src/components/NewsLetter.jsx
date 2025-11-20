const NewsLetter = () => {
    
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-2 mt-24 pb-14">
            <h1 className="md:text-4xl text-2xl font-semibold hover:text-green-700 hover:scale-105 transition-all">Never Miss a Deal!</h1>
            <p className="md:text-lg text-gray-500/70 pb-8 hover:text-green-600">
                Subscribe to get the latest offers, new arrivals, and exclusive discounts
            </p>
            <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12 hover:scale-105 transition-all shadow-2xl shadow-green-500">
                <input
                    className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
                    type="text"
                    placeholder="Enter your email id"
                    required
                />
                <button type="submit" className="md:px-12 px-8 h-full text-white bg-primary hover:bg-primary-dull hover:scale-105 transition-all cursor-pointer rounded-md rounded-l-none shadow-2xl ">
                    Subscribe
                </button>
            </form>
        </div>
    )
}
export default NewsLetter;