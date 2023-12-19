// const fetchDataStart = () => ({
//     type: 'FETCH_DATA_START',
//   });
  
//   const fetchDataSuccess = (data) => ({
//     type: 'FETCH_DATA_SUCCESS',
//     payload: data,
//   });
  
//   const fetchDataError = (error) => ({
//     type: 'FETCH_DATA_ERROR',
//     payload: error,
//   });
  
//   export const fetchData = () => {
//     return (dispatch) => {
//       dispatch(fetchDataStart());
  
//       // Asinxron amalni bajarish (masalan, API dan malumotlarni olish)
//       fetch('http://localhost:7777/attendance/getAnalysis',
    //   {
    //              method: "GET",
    //              headers: {
    //                'Authorization' : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Njc4ZDI1NmVkODAxMDVmZmZjODhjYiIsImlhdCI6MTcwMTg0ODA3MSwiZXhwIjoxNzA0NDQwMDcxfQ.qb6_n_GFo5lXtblJJY1vAnf1wjKo6Uf23TaMQaNohsw",
    //              }
    //            }
//       )
//         .then(response => response.json())
//         .then(data => dispatch(fetchDataSuccess(data.pop())))
//         .catch(error => dispatch(fetchDataError(error)));
//     };
//   };

// import instance from
import instance from "../../services/api/"

 const load_attends = (attends) => {
    return{
       type: "LOAD_ATTENDS",
       payload: {
        attends
       }
    }
}

const loadAttends = () => async dispatch => {
    instance(`/attendance/getAnalysis`,{
        method: "GET",
            headers: {
            'Authorization' : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Njc4ZDI1NmVkODAxMDVmZmZjODhjYiIsImlhdCI6MTcwMTg0ODA3MSwiZXhwIjoxNzA0NDQwMDcxfQ.qb6_n_GFo5lXtblJJY1vAnf1wjKo6Uf23TaMQaNohsw",
        }
    }).then(response => {
        dispatch(load_attends(response.data))
    })
}

export {loadAttends}