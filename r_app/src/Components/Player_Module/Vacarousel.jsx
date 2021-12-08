import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Vacard from './Vacard';

function Vacarousel({onDel,vdata}){
  // alert(JSON.stringify(vdata))
    // vdata = vdata.find((props)=>props.p===x )
    var local_x = localStorage.getItem('x')
    var v2 = []
    // alert(vdata.length)
    for(var i =0 ; i< vdata.length; i++){
      // && vdata[i]['players'].includes(local_x)
      if(vdata[i]['players'] && vdata[i]['players'].indexOf(parseInt(local_x)) != -1){
        // alert(local_x)
        // alert(vdata[i]['players'])
        // alert(vdata[i]['players'].indexOf(parseInt(local_x)))
        // alert(JSON.stringify(vdata[i]))
        v2.push(vdata[i])
        // alert(vdata[i])
      }

    }
    // alert(v2)
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
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
            <Vacard
            props={val}
            key = {val.id}
            onDelete = {onDel}
            />
        )
    }

    return(
          <Carousel
            responsive={responsive}
          >
          {v2.map(ncard)}
          </Carousel>
    )
}

export default Vacarousel;