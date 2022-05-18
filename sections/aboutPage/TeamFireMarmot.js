import React from 'react';
import PersonalCard from './personalCard';
import { FireMarmot }  from './personalDescriptions'


const FireMarmots = Object.entries(FireMarmot);
FireMarmots.sort();

const TeamFireMarmot = () => (
  FireMarmots.map((i, idx) => (
      <PersonalCard
        key={idx+i[0]}
        cardHeader={i[1].title}
        text={i[1].description}
        imgSrc={i[1].image}
        />
  ))
)

export default TeamFireMarmot;
