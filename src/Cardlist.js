import React from 'react';
import Card from './Card';


function Cardlist({robots}) {
	// mapping to json file amd showing cards
	const cardlists = robots.map((user,i) => {
		return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />		
	})
	return (
		// displaying
				<div>
	  				{cardlists}
	  			</div>
	  );		
	}

	  

export default Cardlist;
