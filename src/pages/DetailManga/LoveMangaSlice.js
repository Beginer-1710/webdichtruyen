import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux';



const nameUserCurrent = JSON.parse(localStorage.getItem("user"));
const nameUser = nameUserCurrent?.username;
const LoveMangaSlice = createSlice({
    name : "LoveManga",
    initialState : {
        user : JSON.parse(localStorage.getItem("user"))?.username || "",
        listMangaLove : JSON.parse(localStorage.getItem(nameUser)) || []
    },
    reducers : {
        addMangaLove(state,action){
            state.user = JSON.parse(localStorage.getItem("user")).username;
            const tempList = state.listMangaLove;
            const newArray = [...tempList,action.payload];
            console.log(newArray,tempList);
            const temp = [];
            newArray.forEach((item1,index) => {
                let unSame = false;
                temp.forEach((item2,index) => {
                    if(item1.mangaEP === item2.mangaEP){
                        unSame = true;
                    }
                })
                if(!unSame)
                {
                    temp.push(item1);
                }
            })
            console.log(state,"heheheheheheheheh");
            state.listMangaLove = temp;
            localStorage.setItem(state.user,JSON.stringify(state.listMangaLove))
            console.log(state.listMangaLove);
        }
    }
})


const {actions,reducer} = LoveMangaSlice;
export const {addMangaLove} = actions;
export default reducer