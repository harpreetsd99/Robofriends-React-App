//  ./ for current directory & ../foldername to change folder
import React, {Component} from 'react';
import Searchbar from './Searchbar';
import Cardlist from './Cardlist';
import { robots } from './robots';
import Scroll from './Scroll';
import './App.css';

// state can be only accessed by class due to constructor. 
// State for dynamic and props for static storage
class App extends Component{
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:''
		}
	}
	// for after loading work use componentDidMount
	componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }
  // Events or updates or own methods should be in parent mainly
	onSearchChange = (event) => {
	// arrow functions should be used for methods as this keyword refers to component in them
		this.setState({ searchfield:event.target.value })
		
	}
	render(){
		// filtering
		const filteredRobot = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		// displaying all components
		return(
				<div className="tc">
					<h1>RoboFriends</h1>
					<Searchbar searchChange={this.onSearchChange} />
				<Scroll>
					<Cardlist robots={filteredRobot}/>
				</Scroll>	
				</div>	
			);
		}	
}
export default App;