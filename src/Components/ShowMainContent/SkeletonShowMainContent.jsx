import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

import Skeleton from '@mui/material/Skeleton';
import SkeletonListManga from '../ListManga/SkeletonListManga';
import SkeletonListItemGenre from '../ListLikeGenre/SkeletonListItemGenre';
import SkeletonListMostView from '../ListMostView/SkeletonListMostView';
SkeletonShowMainContent.propTypes = {
    
};

function SkeletonShowMainContent(props) {
    return (
        <div className='home-containerMain center'>
                <div className='home-contnetMain'>
                    <div className='home-contnetMain_left'>
                        <div className='home-listManga'>
                            <SkeletonListManga />
                        </div>
                        <div className='home-pagination'>
                            <Skeleton variant="rectangular" width="100%" height="100%" />
                        </div>
                    </div>
                    <div className='home-contnetMain_right'>
                            <SkeletonListItemGenre />
                            <SkeletonListMostView />
                    </div>
                </div>
            </div>
    );
}

export default SkeletonShowMainContent;