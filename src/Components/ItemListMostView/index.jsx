import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TodayIcon from '@mui/icons-material/Today';
import { Link, useNavigate } from 'react-router-dom';
ItemListMostView.propTypes = {
    
};

function ItemListMostView(props) {
    const {item} = props;
    const randomNumberSeen = Math.floor(Math.random() * 10000000);
    const randomNumberLike = Math.floor(Math.random() * 100000);
    const day = item?.lastUpdate.split(" ")[0].split("-").reverse().join("/");

    const CurrentUrl = useNavigate();
    const handleClickItem = () => {
        CurrentUrl(`/webdichtruyen/detail/${item.mangaEP}`);
    }
    return (
    //    <Link to={`/detail/${item.mangaEP}`}>
         <div className='itemListMostView' onClick={handleClickItem}>
            <span className='itemListMostView-tittle_Manga'>{item.title}</span>
            <div className='itemListMostView-container'>
                <div className='itemListMostView-img' style={{backgroundImage: `url(${item.cover})`}}></div>
                <div className='itemListMostView-content'>
                    <div className='itemListMostView-itemInfor '>
                        <VisibilityRoundedIcon className='itemListMostView-item_icon'/>
                        <span>{randomNumberSeen}</span>
                    </div>
                    <div className='itemListMostView-itemInfor '>
                        <FavoriteIcon className='itemListMostView-item_icon'/>
                        <span>{randomNumberLike}</span>
                    </div>
                    <div className='itemListMostView-itemInfor '>
                        <AutoStoriesIcon className='itemListMostView-item_icon'/>
                        <span>{item?.lastChap}</span>
                    </div>
                    <div className='itemListMostView-itemInfor '>
                        <TodayIcon className='itemListMostView-item_icon'/>
                        <span>{day}</span>
                    </div>
                    <button>XEM NGAY</button>
                </div>
            </div>
        </div>
    //    </Link>
    );
}

export default ItemListMostView;