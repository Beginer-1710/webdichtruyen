import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { Skeleton } from '@mui/material';

SkeletonItemLikeGenre.propTypes = {
    
};

function SkeletonItemLikeGenre(props) {
    return (
        <div className='itemLikeGenre'>
            <Skeleton variant="rectangular" width="100%" height="100%" />
        </div>
    );
}

export default SkeletonItemLikeGenre;