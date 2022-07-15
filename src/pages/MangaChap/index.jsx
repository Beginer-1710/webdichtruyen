import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import mangaApi from '../../api/mangaApi';
import HeaderMangaChap from './Components/HeaderMangaChap';
import ShowMainManga from './Components/ShowMainManga';

import SkeletonShowManga from './Components/ShowMainManga/SkeletonShowManga'
MangaChap.propTypes = {
    
};

function MangaChap(props) {
    
    const {mangaName , mangaChap} = useParams();
    const [chapManga , setChapManga] = useState({});
    const [isComplete , setIsComplete] = useState(false);


    useEffect(() => {
        (async () => {
            try {
                const respon = await mangaApi.getMangaChap(mangaName,mangaChap);
                setChapManga(respon.data.data);
                setIsComplete(true)
            } catch (error) {
                console.log("False to fecth mangaChap");
            }
        })()
        return () => {
            setIsComplete(false)
        }
    },[mangaChap])
    return (
        <div className='MangaChap'>
                <HeaderMangaChap 
                nextChap={chapManga?.nextChapter} 
                currentChap={chapManga?.currentChapter} 
                preChap={chapManga?.prevChapter}
                mangaName={mangaName}
                mangaChap={mangaChap}
                chapList={chapManga.chapterList}
                />
           {
            !isComplete ? <SkeletonShowManga /> :  <ShowMainManga data={chapManga.pages} currentChap={chapManga?.currentChapter}/>
           }
        </div>
    );
}

export default MangaChap;