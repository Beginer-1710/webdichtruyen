import React, { useEffect, useState } from 'react';
import './style.css'
import mangaApi from '../../api/mangaApi';
import ItemManga from '../ItemManga';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function HeaderSlider(props) {
    const [mangas,setMangas] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const params = {list : true , sort : 4 }
                const respon = await mangaApi.getManga(params);
                setMangas(respon.data.data.mangas);
            } catch (error) {
                console.log('false to get hot manga');
            }
        })()
    },[])

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 860,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            // {
            //   breakpoint: 480,
            //   settings: {
            //     slidesToShow: 1,
            //     slidesToScroll: 1
            //   }
            // }
          ]
      };
    return (
        <div className='slider-container'>
            <div className='slider-content'>
                <h1 className="slider-header">TRUYỆN HAY ĐỀ CỬ</h1>   
                <div className='slider-content_main'>
                    <div className='slider-left'>
                        <ItemManga item={mangas[0]}/>
                    </div>
                    <div className='slider-right'>
                            
                                <Slider {...settings}>
                                    {
                                        mangas.map((manga) => (
                                            <ItemManga item={manga} key={manga.mangaEP}/>
                                         ))
                                    }
                                </Slider>
                                 
                            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderSlider;