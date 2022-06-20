import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { Skeleton } from '@mui/material';
SkeletonItemListMostView.propTypes = {
    
};

function SkeletonItemListMostView(props) {
    return (
        <div className='itemListMostView'>
            <span>
                <Skeleton width="100%" height="100%"/>
            </span>
            <div className='itemListMostView-container'>
                <div className='itemListMostView-img' >
                    <Skeleton variant="rectangular" width="100%" height="100%" />
                </div>
                <div className='itemListMostView-content'>
                    <Skeleton variant="rectangular" width="100%" height="100%" />
                </div>
            </div>
        </div>
    );
}

export default SkeletonItemListMostView;