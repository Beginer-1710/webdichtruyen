import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

import ItemLikeGenre from '../ItemLikeGenre'
SliderGenre.propTypes = {
    
};

function SliderGenre(props) {
    let {numberMangas , lastUpdate , typeManga ,imgTypePage } = props;
    const item = {
        imgUrl : imgTypePage,
        nameGenre : typeManga
    }
    lastUpdate = lastUpdate == undefined ? "2020-10-21 04:20:01" : lastUpdate;
    const newLastUpdate = lastUpdate.split(" ")[0].split("-").reverse().join("/");
    return (
        <div className='sliderGenre'>
            <div className='sliderGenre-container'>
                <h1>THỂ LOẠI :</h1>
                <div className='sliderGenre-item'>
                    <ItemLikeGenre item={item}/>
                </div>
                <div className='sliderGenre-item_infor'>
                        <p>{numberMangas} truyện</p>
                        <p>Last updated: {newLastUpdate}</p>
                </div>
            </div>
        </div>
    );
}

export default SliderGenre;