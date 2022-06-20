import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '@mui/material';
import './style.css'
import SkeletonListMostView from '../ListMostView/SkeletonListMostView';
SkeletonShowMangaChaps.propTypes = {
    
};

function SkeletonShowMangaChaps(props) {
    return (
        <div className='showMangaChaps'>
            <div className='showMangaChaps-container'>
                <div className='showMangaChaps-left'>
                    <div className='showMangaChaps-main'>
                    <Skeleton variant="rectangular" width="100%" height="100%" />
                    </div>
                </div>
                <div className='showMangaChaps-right'>
                    <SkeletonListMostView />
                </div>
            </div>
        </div>
    );
}

export default SkeletonShowMangaChaps;