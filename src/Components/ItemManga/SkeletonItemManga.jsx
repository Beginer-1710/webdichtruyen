import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@mui/material/Skeleton';
SkeletonItemManga.propTypes = {
    
};

function SkeletonItemManga(props) {
    return (
        <div className='itemManga'>
            <div className='itemManga-img'>
                <Skeleton variant="rectangular" width="100%" height="100%"/>
            </div>
            <p className='item-tittle'>
                <Skeleton width="100%" height="100%"/>
            </p>
            <div className='item-update'>
                <Skeleton width="100%" height="100%"/>
            </div>
        </div>
    );
}

export default SkeletonItemManga;