import React from 'react';

export  function ParamItem({param}) {
    const { name, description} = param;
    console.log (`param paramItem ${param.id}`)
    return <div>
        <input  type="checkbox" id={name} defaultChecked ></input> {description}
    </div>;
}




