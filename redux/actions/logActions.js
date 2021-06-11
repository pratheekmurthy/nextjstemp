import axios from 'axios'


const login =() =>{
    return {type : 'TOGGLE_STATE'}
}


export const toggleStatus=()=>{
    return {type : 'TOGGLE_STATE'}
}


const addCust = (cust) => {
    return {
        type: 'ADD_CUST',
        payload: cust
    }
}


export const getALLCountries = () => {
    // console.log(" i am in action")
    return (dispatch) => {
        axios.get(`https://restcountries.eu/rest/v2/all`)
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('errors')) {
                alert(result.errors)
            } else {
                dispatch(addCust(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}