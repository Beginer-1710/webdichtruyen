import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { Skeleton } from '@mui/material';
SkeletonShowManga.propTypes = {
    
};

function SkeletonShowManga(props) {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className='mainManga'>
            <h1 className='ChapTittle'>
                <Skeleton width="200px" height="42px"/>
            </h1>
            <div className='mainManga-container'>
                <Skeleton variant="rectangular" width="100%" height="4000px" />
            </div>
        </div>
    );
}

export default SkeletonShowManga;