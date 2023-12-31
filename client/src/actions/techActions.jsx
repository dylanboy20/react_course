import { GET_TECHS,ADD_TECH, DELETE_TECH,SET_LOADING ,TECHS_ERROR} from "./types";

//GET TECHS FROM SERVER


export const getTechs = () =>async dispatch =>{
    try {
        setLoading()

        const res=await fetch('http://localhost:3001/techs')
        const data= await res.json()


        dispatch({
            type:GET_TECHS,
            payload:data
        })

        
    } catch (error) {
        dispatch({
            type:TECHS_ERROR,
            payload:error.response.statusText
            })
        
    }
}

//add tech to server

export const addTechs = (tech) =>async dispatch =>{
    try {
        setLoading()

        const res=await fetch('http://localhost:3001/techs',{
            method:'POST',
            body:JSON.stringify(tech),
            headers:{
                'Content-Type':"application/json"
            }

        })
        

        const data= await res.json()


        dispatch({
            type:ADD_TECH,
            payload:data
        })

        
    } catch (error) {
        dispatch({
            type:TECHS_ERROR,
            payload:error.response.statusText
            })
        
    }
}

//delete tech
export const deleteTechs = (id) =>async dispatch =>{
    try {
        setLoading()

        await fetch(`http://localhost:3001/techs/${id}`,{
            method:'DELETE'
        })
        


        dispatch({
            type:DELETE_TECH,
            payload:id
        })

        
    } catch (error) {
        dispatch({
            type:TECHS_ERROR,
            payload:error.response.statusText
            })
        
    }
}

//set loading to true
export const setLoading  = () =>{
    return{
        type:SET_LOADING
    }
}
