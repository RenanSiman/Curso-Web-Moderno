import React from 'react';
import ReactDOM from 'react-dom';

//import First from './components/First';
//import GoodMorning from './components/GoodMorning'
//import Multi from './components/Multiples'

import Greeting from './components/Greeting'

ReactDOM.render(
        <div> 
            <Greeting type="Bom dia" name="João"/>
        </div>

, document.getElementById('root'))

