import React from 'react';

// eslint-disable-next-line no-unused-vars
import { Card } from '../card/card.component';
import './card-list.style.css';


export const CardList = props => (
    <div className='card-list'>
      {props.monsters.map(monster =>(
       <Card key={monster.id} monster={monster} />
      ))}
   </div>
   );