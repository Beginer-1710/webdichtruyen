import React from 'react';
import PropTypes from 'prop-types';
import SkeletonItemManga from '../ItemManga/SkeletonItemManga';
import './style.css'
SkeletonListManga.propTypes = {
    
};

function SkeletonListManga(props) {
    const listManga = Array.from(new Array(48));
    return (
        <>
            {
                listManga.map((item,index) => (    
                        <div className='item_change' key={index}>
                            <SkeletonItemManga />
                        </div>
                ))
            }
        </>
    );
}

export default SkeletonListManga;