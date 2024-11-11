import lists from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';


function Freebook(){


    const filterdata = lists.filter((list)=>list.category === "free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
   // console.log(filterdata);

    return(
        <>
        
         <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
            <div>
               <h1 className='font-semibold  pb-4'>Free Offered Courses</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum, numquam quia distinctio obcaecati saepemhgjfjjkkrhsbdncxvd dciasuodyigxvcn dksjxb mksbhcb xnbshzbc  ??</p>
             </div>
         <div>
         <div className="slider-container">
      <Slider {...settings}>
         {filterdata.map((item)=>(
            <Cards item={item} key={item.id}/>
         ))}
      </Slider>
    </div>
</div>
         </div>
        </>
    )
}

export default Freebook