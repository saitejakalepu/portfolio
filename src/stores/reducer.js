const initialState= {
    data :{}
}

 export const reducer=(state=initialState, {type,payload})=>{
    switch(type)
    {
        case "SET_DATA" :
            return{
                ...state,
                data : payload
            }
        default :
        return state
    }
}
