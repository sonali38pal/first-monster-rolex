import React from 'react';
import './card.style.css';
// export function Card(props) {
//     return (
//         <div className='card-list'>
//             <h1>{props.monster.name}</h1>

//         </div>
//     );
// }


export const Card = props => (
    <div className='card-container'>
    <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&Size=100*100`}  />
       <h2>{props.monster.name}</h2>
       <p>{props.monster.email}</p>
      </div>
   );