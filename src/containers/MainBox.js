import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
	state = {
		currentView: "profile"
	}

	changeState = event => {
		this.setState({
			currentView: event.target.id
		})
	}


	render (){

		/*

		Replace the code below! Depending on what menu item is selected in the menu,
		I should render either a Profile, Photos, Cocktails, or Pokemon
		component.Think of a way to track which menu item was selected.
		Which component should have state? Which component should have
		methods to control state? Where should these methods be called?

		*/

		let detailsToDisplay;

		switch(this.state.currentView) {
			case "profile": detailsToDisplay = <Profile/>
			break
			case "photo": detailsToDisplay = <Photos/>
			break
			case "cocktail": detailsToDisplay = <Cocktails/>
			break
			case "pokemon": detailsToDisplay = <Pokemon/>
			break
		}


		return (
		<div>
			<MenuBar handleChange={this.changeState} currentView={this.state.currentView} />
			{detailsToDisplay}
		</div>
		)
	}

}

export default MainBox
