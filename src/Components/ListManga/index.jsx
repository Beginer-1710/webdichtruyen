import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'

import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import ItemManga from '../ItemManga';
import SkeletonItemManga from '../ItemManga/SkeletonItemManga';
ListManga.propTypes = {
    
};

function ListManga(props) {
    const {listManga} = props;
    return (
        <>
            {
                listManga.map((item,index) => (    
                        <div className='item_change' key={index}>
                            <ItemManga item={item} />
                        </div>
                ))
            }
        </>
    );
}

export default ListManga;