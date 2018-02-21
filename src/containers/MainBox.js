import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
	state = {
		selectedItem: 'profile'
	}
	
	handleClick = (event) => {
		this.setState({selectedItem: event.target.id})
	}

	render (){
		return (
			<div>
				<MenuBar 
				selectedItem={this.state.selectedItem}
				handleClick={this.handleClick}
				/>
			</div>
		)
		
	}

}

export default MainBox