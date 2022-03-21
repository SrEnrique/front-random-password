import React from 'react';
import './paramItem.css'

export  function ParamItem({param}) {
    const { name, description} = param;
    console.log (`param paramItem ${param.id}`)
    return <label class="container-input">
    <input type="checkbox"  id={name} defaultChecked></input> {description}
    <span class="checkmark"></span>
    </label>;


}




