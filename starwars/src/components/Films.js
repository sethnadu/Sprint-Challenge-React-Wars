import React from "react";


function Films(props) {

    return (
        <>
         <ul>
          {props.props.films.map((film) => {
              return <li key = {film}>{film}</li>
          })}
        </ul>
        </>
    )
}

export default Films;