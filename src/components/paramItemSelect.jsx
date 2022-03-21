import React from 'react'
import './paramItemSelect.css'


function length_options (length) {
    var options = []
    for (let index = 6; index < length; index++) {
         options.push({value: index, label: index});
    }
    return options;
}



export  function ParamItemSelect() {
    var options = length_options(60);
  return <div class="container-select">
        <label for="pass_length">Numero de caracteres: </label>

        <select key="slect_pass" name="pass_length" id="pass_length" class="select">
            {options.map((option) => (
                <option key={option.key} value={option.value}>{option.label}</option>
            )) }

        </select>
  </div>;
}
