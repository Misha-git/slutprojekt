import React from 'react';


import withToggle from "./withToggle";

const ViewEditToggle = ( {toggle, toggleStatus, title }) => {


//class component 
//state onchange 
//controlled element 
    return (
        <div>
             { toggleStatus ?
              <input type="text" value={title} />
             : <h1>{title}</h1>

             }

             
               
            <button onClick={toggle}>

                {toggleStatus ? "Cancel" :"edit"}
            </button>

        </div>
    )
}

export default   withToggle(ViewEditToggle);