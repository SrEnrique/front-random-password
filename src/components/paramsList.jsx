import React from 'react';
import { ParamItem } from './paramItem';


export function ParamsList({params}) {
    console.log("sad "+params)
    return <div>
        
        {params.map( (param) => (
            
            <ParamItem key={param.name} param={param}></ParamItem>
        ))}
    </div>;
}
