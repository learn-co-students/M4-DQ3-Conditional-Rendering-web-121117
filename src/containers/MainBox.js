import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
	state = {
		selected: "profile"
	}

	handlesButton = event => {
		event.preventDefault()
		this.setState({
			selected: event.target.id
		})

	}


	render (){
		console.log(this.state)

		/*

		Replace the code below! Depending on what menu item is selected in the menu,
		I should render either a Profile, Photos, Cocktails, or Pokemon
		component.Think of a way to track which menu item was selected.
		Which component should have state? Which component should have
		methods to control state? Where should these methods be called?

		*/

		let detailsToDisplay =
			<div>
				{this.state.selected === "profile" ? <Profile/> : null}
				{this.state.selected === "photo" ? <Photos/> : null}
				{this.state.selected === "cocktail" ? <Cocktails/> : null}
				{this.state.selected === "pokemon" ? <Pokemon/> : null}
			</div>



		return (
		<div>
			<MenuBar value={this.state.selected} handlesButton={this.handlesButton} />
			{detailsToDisplay}
		</div>
		)
	}

}

export default MainBox
