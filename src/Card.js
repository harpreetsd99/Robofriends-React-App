import React from 'react';
// using prop for card details and img src
function Card(props) {
  return (
   <div className="tc bg-lightest-blue dib br3 pa3 ma3 grow bw2 shadow-5">
      <img alt="Robot" src={`https://robohash.org/${props.id}?200x200`} />
      <div>
        <h2>{props.name}</h2>
        <h3>{props.email}</h3>
      </div>
    </div>
  );
}
export default Card;
