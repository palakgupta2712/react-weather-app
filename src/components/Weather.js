import React from 'react'

function Weather(props){
    console.log(props.data)
    return(
        <div>
            {props.data.cod}
        </div>
    )
}
export default Weather