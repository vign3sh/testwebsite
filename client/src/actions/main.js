import fetchData from "./utils/fetchData"
export const getSKUS = async (inputValue) => {
    const url = "http://localhost:3000" + '/skus' + '?search=' + inputValue;
    const result = await fetchData({ url, method: 'GET'});
    if (result) {
        return result;
    }
    else{
        return [];
    }  
}

export const getCategoryItems = async (id=45, category='hotItems') => {
    const url = "http://localhost:3000/" + category + '?id=' + id;
    const result = await fetchData({ url, method: 'GET'});
    if (result) {
        console.log("result",result);
        return result;
    }
    else{
        return [];
    }
}