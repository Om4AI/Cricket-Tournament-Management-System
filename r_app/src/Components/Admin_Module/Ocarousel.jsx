import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Ocard from './Ocard';

function Carousell({onDel,data}){



    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

      

      function ncard(val){
        return(
            <Ocard
            props = {val}
            key = {val.id}
            onDelete = {onDel}
            />
        )
    }

    return(
          <div style={{margin:"auto"}}> 
          <Carousel 
            responsive={responsive}
          >
          {data.map(ncard)}
          </Carousel>
          </div>
    )
}

export default Carousell;