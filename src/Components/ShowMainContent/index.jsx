import React from 'react';
import PropTypes from 'prop-types';
import ListManga from '../../Components/ListManga';
import HeaderSlider from '../../Components/HeaderSlider';
import { Box, Container } from '@mui/system';
import { Grid } from '@mui/material';
import mangaApi from '../../api/mangaApi'
import './style.css'
import Pagination from '@mui/material/Pagination';
import ListLikeGenre from '../../Components/ListLikeGenre';
import ListMostView from '../../Components/ListMostView';

import './style.css'
ShowMainContent.propTypes = {
    
};

function ShowMainContent(props) {
    const {listManga , pagination , param ,onChangePage} = props;
    return (
        <div className='home-containerMain center'>
                <div className='home-contnetMain'>
                    <div className='home-contnetMain_left'>
                        <div className='home-listManga'>
                            <ListManga listManga={listManga}/>
                        </div>
                        <div className='home-pagination'>
                            <Pagination 
                            count={pagination%2 == 0 ? pagination/2 : pagination/2 + 0.5} 
                            variant="outlined" 
                            shape="rounded" 
                            page = {param.page}
                            onChange={onChangePage}
                            color = 'standard'
                            hideNextButton = {true}
                            hidePrevButton = {true}
                            />
                        </div>
                    </div>
                    <div className='home-contnetMain_right'>
                            <ListLikeGenre />
                            <ListMostView />
                    </div>
                </div>
            </div>
    );
}

export default ShowMainContent;