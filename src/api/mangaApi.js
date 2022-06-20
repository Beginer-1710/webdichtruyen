import axiosClient from "./axiosClient";


const mangaApi = {
    getGenres(){
        const url = '/list';
        return axiosClient.get(url)
    },
    getManga(params){
        const url = '/list';
        return axiosClient.get(url , {params : params})
    },
    getMangaInfor(mangaName){
        const url = `/manga/${mangaName}`;
        return axiosClient.get(url)
    },
    getMangaChap(mangaName , numberChap){
        const url = `/manga/${mangaName}/${numberChap}`;
        return axiosClient.get(url)
    }
}


export default mangaApi;