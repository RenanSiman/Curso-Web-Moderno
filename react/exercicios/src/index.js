import React from 'react';
import ReactDOM from 'react-dom';

//import First from './components/First';
//import GoodMorning from './components/GoodMorning'
import Multi from './components/Multiples'

ReactDOM.render(
        <div> 
            <Multi.GoodAfternoon name="Ana"/>
            <Multi.GoodAfternoon name="Bia"/>
        </div>

    , document.getElementById('root'))

