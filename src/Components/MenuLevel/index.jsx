import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
MenuLevel.propTypes = {
    
};

function MenuLevel(props) {
    const {listGenres , number , index ,onCloseMenu} = props;
    const currentUrl = useNavigate();
    const handleOnclickItem = (genreEP) => {
        currentUrl(`/webdichtruyen/type/${genreEP}`)
        if(onCloseMenu)
        onCloseMenu();
    }
    return (
        <div className='menuGenre' style={{left : `-${index*118 + 170}px`}}>
            <div className='menuGenre-content'>
                {
                    listGenres.map((genre) => (
                        <p onClick={() => {handleOnclickItem(genre.EP)}} style={{flex: `${100/number}%`}} key={genre.genre || genre.genre} className="MenuGenre-item">{genre.genre}</p>
                    ))
                }
            </div>
        </div>
    );
}

export default MenuLevel;