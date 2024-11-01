import book from '../../assets/Images/herobook.webp'
import './banner.css'
const Banner = () => {
      return (
            <div id='banner'>
                  <div className=' flex flex-col-reverse md:flex-row justify-between items-center gap-14'>
                        <div>
                              <h1 className=' text-6xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold banner-text'>Books to freshen up your bookshelf</h1>
                              <button className=' mt-4 btn-lg rounded-lg font-bold bg-[#cca97b] text-white '>View The List</button>
                        </div>
                        <div className=' w-full md:w-3/5 lg:w-2/5'>
                              <img className=' w-full  rounded-lg' src={book} alt="" />
                        </div>
                  </div>
            </div>
      );
};

export default Banner;