import React from 'react';

const Card=({name,id,email})=>{
  return(
    <div className='tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
    <img src={`https://robohash.org/${id}?set=set4`} alt='robots' height='200' width='250'/>
    <div>
    <h2>{name}</h2>
    <p>{email}</p>
    </div>
    </div>
  );
}
export default Card;
