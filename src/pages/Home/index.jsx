import React, { useEffect, useState } from 'react';
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
import ShowMainContent from '../../Components/ShowMainContent';

import SkeletonShowMainContent from '../../Components/ShowMainContent/SkeletonShowMainContent'
import { useNavigate } from 'react-router-dom';
Home.propTypes = {
    
};

function Home(props) {
    const [isComplete , setIsComplete] = useState(false);
    const CurrnetLink = useNavigate();
    const [param , setParam] = useState({
        list : true,
        sort : 2,
        page : 1
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

        CurrnetLink(`/page=${page}`)
    }

    console.log(isComplete);
        return (
        <>
            <HeaderSlider />     
            {
                !isComplete ? 
                <SkeletonShowMainContent />
                : <ShowMainContent listManga={listManga} param={param} pagination={pagination} onChangePage={handleOnchangePage}/>
            }
        </>
    );
}

export default Home;