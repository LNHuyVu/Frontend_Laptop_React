import httpClient from "../http-common"
// const getAll=()=>
// {
//     return httpClient.get('./user');
// }
const create=(data)=>{
    return httpClient.post('/create-new-category',data);
}
export default{create}