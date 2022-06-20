import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

import { Link } from 'react-router-dom';
ItemLikeGenre.propTypes = {
    
};

function ItemLikeGenre(props) {
    const {item = {}} = props;
    console.log(item,"heheheheheheh");
    return (
        <Link to={`/type/genre=${item.genre}`}>
            <div className='itemLikeGenre' style={{backgroundImage : `url(${item.imgUrl})`}}>
                <div className='itemLikeGenre-nameGenre'>{item.nameGenre}</div>
            </div>
        </Link>
    );
}

export default ItemLikeGenre;