import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './style.css'

import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TodayIcon from '@mui/icons-material/Today';
import { Link, useNavigate } from 'react-router-dom';
ItemManga.propTypes = {
    item : PropTypes.object
};


function ItemManga(props) {
    const {item} = props;
    const randomNumberSeen = Math.floor(Math.random() * 10000000);
    const randomNumberLike = Math.floor(Math.random() * 100000);
    const day = item?.lastUpdate.split(" ")[0];
    const urlImge = item?.cover;

    const currentLink = useNavigate();
    const handleOnclickItem = () => {
        currentLink(`/detail/${item?.mangaEP}`)
    }
    return (    
            <div className='itemManga' onClick={handleOnclickItem}>
            <div className='itemManga-img' style={{backgroundImage: `url(${urlImge})`}}>
                <img src="https://assets.dichtruyenvip.com/assets/images/ico_hot.png" alt="" />
                <div className='item-social'>
                    <div className='item_like center'>
                        <VisibilityRoundedIcon className='item_icon'/>
                        <span>{randomNumberSeen}</span>
                    </div>
                    <div className='item_seen center'>
                        <FavoriteIcon className='item_icon'/>
                        <span>{randomNumberLike}</span>
                    </div>
                </div>
            </div>
            <p className='item-tittle'>{item?.title}</p>
            <div className='item-update'>
                <div>
                    <AutoStoriesIcon className='item_icon center'/>
                    <span>{item?.lastChap}</span>
                </div>
                <div>
                    <TodayIcon className='item_icon center'/>
                    <span>{day}</span>
                </div>
            </div>
             </div>
    );
}

export default ItemManga;