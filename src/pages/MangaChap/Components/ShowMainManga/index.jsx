import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

ShowMainManga.propTypes = {
    
};

function ShowMainManga(props) {
    const {data = [],  currentChap} = props;
    console.log((data));
    const handleGoTop = () => {
        // window.pageYOffset = 0;
        // document.documentElement.scrollTop = 0;
        window.scrollTo(0,0)
    }
    return (
        <div className='mainManga'>
            <h1 className='ChapTittle'>{currentChap}</h1>
            <div className='mainManga-container'>
                {
                    data.map((item) => (
                        <img src={item} alt="" />
                    ))
                }
            </div>
            <div className='topButton'>
                <ArrowUpwardIcon className='inconTop-mainChap' onClick={handleGoTop}/>
            </div>
        </div>
    );
}

export default ShowMainManga;