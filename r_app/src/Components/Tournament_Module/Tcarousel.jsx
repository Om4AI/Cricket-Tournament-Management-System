import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Tcard from './Tcard';

function Tcarousel({data}){



    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

      

      function ncard(val){
        return(
            <Tcard
            props = {val}
            key = {val.id}
            />
        )
    }

    return(
          <Carousel
            responsive={responsive}
          >
          {data.map(ncard)}
          </Carousel>
    )
}

export default Tcarousel;