import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

import { Link, useNavigate } from 'react-router-dom';
ItemLikeGenre.propTypes = {
    
};

function ItemLikeGenre(props) {
    const {item = {}} = props;

    const CurrentUrl = useNavigate()
    const handleClickItem = () => {
        CurrentUrl(`/type/genre=${item.genre}`)
    }
    return (
            <div className='itemLikeGenre' style={{backgroundImage : `url(${item.imgUrl})`}} onClick={handleClickItem}>
                <div className='itemLikeGenre-nameGenre'>{item.nameGenre}</div>
            </div>
    );
}

export default ItemLikeGenre;