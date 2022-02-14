import React, {useState} from 'react';
import Axios , * as others from 'axios';
import { ParamsList } from './paramsList';
import { ParamItemSelect } from './paramItemSelect';

function FormGeneratePassword() {


    const url = "http://localhost/api/password/generate";
    const [data, setData] = useState({
        pass_length: 6,
        symbols: true,
        number: true,
        lowercase: true,
        uppercase: true,
        ambiguous: true
    });

    function handle (e){
        const newdata = {...data}
        console.log(e.target.nodeName)
        if (e.target.nodeName === "SELECT"){
            newdata[e.target.id] = e.target.value
        }else if (e.target.nodeName === "INPUT") {
            newdata[e.target.id] =e.target.checked
        }

        setData(newdata)
        console.log("newdata")
        console.log(newdata)

    }
    function submit(e){
        e.preventDefault( );
        Axios.defaults.preflightContinue = true;
        Axios.post(url, data)
        .then(res => {
            console.log(res.data);
            document.getElementById("password").value = res.data.password;
        })
    }
    return <div>
        <form onChange={(e) => handle(e)} onSubmit={(e) =>  submit(e)}>
            <ParamItemSelect ></ParamItemSelect>
            <ParamsList params={[
                { id:1, name: "symbols", description: "Symbolos", checked: true },
                { id:2, name: "number", description: "Numbers", checked: true },
                { id:3, name: "lowercase", description: "Lowercase", checked: true },
                { id:4, name: "uppercase", description: "Uppercase", checked: true },
                { id:5, name: "ambiguous", description: "Ambiguous", checked: true }
            ]} ></ParamsList>
            <button>Submit</button>
        </form>
        <div>
            <input id="password" type="text"/>
        </div>
    </div>;
}

FormGeneratePassword.propTypes = {};



export default FormGeneratePassword;
