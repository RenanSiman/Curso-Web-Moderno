import React from 'react'

export default props => [
    <h1 key='h1'>Good morning {props.name}!!</h1>,
    <h2 key='h2'>Until soon!!</h2>
]

// export default props => 
//     <React.Fragment>
//         <h1>Good morning {props.name}!!</h1>
//         <h2>Until soon!!</h2>
//     </React.Fragment>

// export default props => 
//     <div>
//         <h1>Good morning {props.name}!!</h1>
//         <h2>Until soon!!</h2>
//     </div>