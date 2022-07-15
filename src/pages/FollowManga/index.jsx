import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import SliderGenre from '../../Components/SliderGenre'
import ShowMainContent from '../../Components/ShowMainContent';
import { getListMangaFollow } from '../DetailManga/LoveMangaSlice';
import { useDispatch, useSelector } from 'react-redux';
import { number } from 'yup/lib/locale';
FollowManga.propTypes = {
    
};

let numberRender = 0;
function FollowManga(props) {

    numberRender++;
    const dispatch = useDispatch();
    useEffect(()=>{
        const action = getListMangaFollow();
        dispatch(action);
    },[])

    const StateInfo = useSelector(state => state)
    const MangaLoveInfo = StateInfo.mangaLove;

    const listManga = MangaLoveInfo.listMangaLove;
    const user = MangaLoveInfo.user;
    

   
    const [param , setParam] = useState({
        page : 1
    });
    const [pagination , setPagination] = useState( Math.ceil(listManga.length/48))
    const [newList , setNewList] = useState([]);
    useEffect(() => {
        setNewList(listManga.slice(param.page*24-24, param.page*24-1))
    },[param,listManga])
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