import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { useSelector } from 'react-redux';
import SliderGenre from '../../Components/SliderGenre'
import ShowMainContent from '../../Components/ShowMainContent';
FollowManga.propTypes = {
    
};

function FollowManga(props) {
    const StateInfo = useSelector(state => state)
    const MangaLoveInfo = StateInfo.mangaLove;

    const listManga = MangaLoveInfo.listMangaLove;
    const user = MangaLoveInfo.user;
    console.log(listManga,user);
    

   
    const [param , setParam] = useState({
        page : 1
    });
    const [pagination , setPagination] = useState( Math.ceil(listManga.length/48))
    console.log(pagination,"hhhh");
    const [newList , setNewList] = useState([]);
    useEffect(() => {
        setNewList(listManga.slice(param.page*24-24, param.page*24-1))
    },[param])
    console.log(listManga,"heheh");
    const handleOnchangePage = (e, page) =>{
        setParam((x) => ({
            ...x,
            page : page
        }))

    }
    return (
        <>
            <SliderGenre numberMangas={listManga?.length} lastUpdate={listManga[0]?.lastUpdate} typeManga={"FOLOWING"} imgTypePage={listManga[0]?.cover}/>
            <ShowMainContent listManga={newList} pagination={pagination} param={param} onChangePage={handleOnchangePage}/>
        </>
    );
}

export default FollowManga;