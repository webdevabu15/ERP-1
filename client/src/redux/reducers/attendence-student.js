// const initialState = {
//   data: null,
//   loading: false,
//   error: null,
// };

// const  attendanceStudentReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'FETCH_DATA_START':
//       return { ...state, loading: true, error: null };
//     case 'FETCH_DATA_SUCCESS':
//       return { ...state, loading: false, data: action.payload };
//     case 'FETCH_DATA_ERROR':
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// export default  attendanceStudentReducer;
const initialState = {
    attend_st : null,
    isloading: true,
}

const attendsReducer = (state = initialState, action) => {
        switch(action.type){
           case "LOAD_ATTENDS":
              return{
                ...state,
                  attend_st: action.payload.attends,
                  isloading: false
              }
              default:
                return state
        }

}

export { attendsReducer }