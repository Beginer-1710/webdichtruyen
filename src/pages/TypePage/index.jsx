import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './style.css'
import { useParams } from 'react-router-dom';
import ShowMainContent from '../../Components/ShowMainContent'
import mangaApi from '../../api/mangaApi'
import SliderGenre from '../../Components/SliderGenre';
import SkeletonShowMainContent from '../../Components/ShowMainContent/SkeletonShowMainContent'
TypePage.propTypes = {
    
};


function TypePage(props) {
    const [isComplete , setIsComplete] = useState(false);
    const typeSearch = useParams().TypeManga;
    const ArrayParam = typeSearch.split("&").map((item) => {
        const tempArray = item.split("=")
        return tempArray
    });
    const objectParam = Object.fromEntries(ArrayParam);
    const nameType = objectParam.nameType;
    delete objectParam.nameType;
    const originParam = {
        ...objectParam,
        page : 1,
        sort : 2

    }

    const [numberMangas , setNumberMangas] = useState(0)
    const [param , setParam] = useState({
        ...originParam
    });
    const [pagination , setPagination] = useState({
        pape : 152
    })

    const params = {
        ...param,
        page : param.page*2 - 1
    }
    const params2 = {
        ...params,
        page : param.page*2
    }
    let list1,list2;
    const [listManga , setListManga] = useState([]);
    useEffect(() => {
        setParam(x => ({
           ...originParam
        }))
    },[typeSearch])
    useEffect(() => {
        (async () => {
            try {
                const listItem = await mangaApi.getManga(params);
                list1 = listItem.data.data.mangas;
                const listItem2 = await mangaApi.getManga(params2)
                list2 = listItem2.data.data.mangas;
                setListManga([
                    ...list1,
                    ...list2
                ])
                setPagination(listItem.data.data.totalPages)
                setNumberMangas(Number(listItem.data.data.totalPages) * 24)
                setIsComplete(true)
            } catch (error) {
                console.log("false to get list item");
            }
        })()

        return () => {
            setIsComplete(false)
        }
    },[param])

    const handleOnchangePage = (e, page) =>{
        setParam((x) => ({
            ...x,
            page : page
        }))

    }
    return (
       <>
        <SliderGenre numberMangas={numberMangas} lastUpdate={listManga[0]?.lastUpdate} typeManga={param?.genre || nameType} imgTypePage={listManga[0]?.cover}/>
        {
            !isComplete ? 
            <SkeletonShowMainContent />
            :<ShowMainContent listManga={listManga} pagination={pagination} param={param} onChangePage={handleOnchangePage}/>
        }
       </>
   
    );
}

export default TypePage;