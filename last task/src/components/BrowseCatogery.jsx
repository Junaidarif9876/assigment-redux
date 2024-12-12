
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

// Slick Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 2000, // Speed of autoplay in milliseconds (2 seconds)
  responsive: [
    {
      breakpoint: 1024, // For tablets and above
      settings: {
        slidesToShow: 2, // Show 2 items on medium screens
      },
    },
    {
      breakpoint: 640, // For mobile screens
      settings: {
        slidesToShow: 1, // Show 1 item on small screens
      },
    },
  ],
};

const BrowseCategory = () => {
  const navigate = useNavigate();

  const goToPage = (Cat) => {
    navigate('/category', { state: Cat });
  };

  return (
    <div className="max-w-[1200px] h-auto bg-[#dfdfdf] mx-auto rounded-[40px] mt-[-40px] mb-9 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-center py-6">Browse By Categories</h1>
      
      {/* Slick Slider Wrapper */}
      <div className="w-[90%] py-9">
        <Slider {...sliderSettings}>
          {/* Mobile Category */}
          <div onClick={() => goToPage("mobile")} className="flex flex-col items-center bg-slate-100 rounded-lg cursor-pointer p-4">
            <h2 className="text-3xl text-slate-600 font-bold mb-4">Mobile</h2>
            <img src="./assets/mobile.png" alt="Mobile" className="w-3/12 h-[200px] object-cover rounded-lg" />
          </div>
          
          {/* Gaming Category */}
          <div onClick={() => goToPage("gaming")} className="flex flex-col items-center bg-slate-100 rounded-lg cursor-pointer p-4">
            <h2 className="text-3xl text-slate-600 font-bold mb-4">Gaming</h2>
            <img src="./assets/game.png" alt="Gaming" className="w-4/12 h-[170px] object-cover rounded-lg" />
          </div>
          
          {/* TV Category */}
          <div onClick={() => goToPage("tv")} className="flex flex-col items-center bg-slate-100 rounded-lg cursor-pointer p-4">
            <h2 className="text-3xl text-slate-600 font-bold mb-4">TV</h2>
            <img src="./assets/tv.png" alt="TV" className="w-full h-[200px] object-cover rounded-lg" />
          </div>
          
          {/* More Products Category */}
          <div onClick={() => goToPage("all")} className="flex flex-col items-center bg-slate-100 rounded-lg cursor-pointer p-4">
            <h2 className="text-xl text-slate-600 font-bold mb-4">More Products</h2>
            <img src="./assets/all.png" alt="All Products" className="w-full h-[180px] object-cover rounded-lg" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BrowseCategory;
