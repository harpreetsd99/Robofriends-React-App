import React from 'react';
// here searchfield refers to event which we are targeting
function Searchbar({searchfield,searchChange}){
	return(
			<div>
				<input className="pa3 ba b--green bg-lightest-green" 
				type="search" 
				placeholder="Search!!"
				onChange={searchChange} />
				// triggers searchChange method of main app component event
			</div>	
	);
}
export default Searchbar;