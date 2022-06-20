import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import SkeletonItemListMostView from '../ItemListMostView/SkeletonItemListMostView';
SkeletonListMostView.propTypes = {
    
};

function SkeletonListMostView(props) {
    const listManga = Array.from(new Array(10));
    return (
        <div className='listLikeGenre'>
            <span>TRUYỆN ĐƯỢC XEM NHIỀU NHẤT</span>
            <div className='listLikeGenre-content'>
                {
                    listManga.map((item) => (
                        <SkeletonItemListMostView />
                    ))
                }
            </div>
        </div>
    );
}

export default SkeletonListMostView;