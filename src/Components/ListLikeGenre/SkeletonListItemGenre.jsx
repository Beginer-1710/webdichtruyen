import React from 'react';
import PropTypes from 'prop-types';
import SkeletonItemLikeGenre from '../ItemLikeGenre/SkeletonItemLikeGenre';
import { Skeleton } from '@mui/material';
import './style.css'

SkeletonListItemGenre.propTypes = {
    
};

function SkeletonListItemGenre(props) {
    const listLikeGenre = Array.from(new Array(5))
    return (
        <div className='listLikeGenre'>
            <span>THỂ LOẠI ĐƯỢC YÊU THÍCH</span>
            <div className='listLikeGenre-content'>
                {
                    listLikeGenre.map((item) => (
                        <SkeletonItemLikeGenre />
                    ))
                }
            </div>
        </div>
    );
}

export default SkeletonListItemGenre;