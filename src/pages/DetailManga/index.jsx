import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { useParams } from 'react-router-dom';

import mangaApi from '../../api/mangaApi'
import HeaderDetailPage from '../../Components/HeaderDetailPage';
import ShowMangaChaps from '../../Components/ShowMangaChaps';

import SkeletonShowMangaChaps from '../../Components/ShowMangaChaps/SkeletonShowMangaChaps'
DetailPage.propTypes = {
    
};

function DetailPage(props) {
    const [isComplete , setIsComplete] = useState(false);
    const mangaName = useParams().mangaId;
    const [inforManga , setInforManga] = useState([]);
    useEffect(() => {
        (async() => {
            const respone = await mangaApi.getMangaInfor(mangaName);
            setInforManga(respone.data.data);
            setIsComplete(true);
        })()
        return () => {
            setIsComplete(false);
        }
    },[mangaName])
    return (
        <div className='detailPage'>
            <HeaderDetailPage data={inforManga}/>
            {
                !isComplete ? 
                <SkeletonShowMangaChaps /> 
                :  <ShowMangaChaps data={inforManga.chaps} mangaName={mangaName}/>
            }      
        </div>
    );
}

export default DetailPage;