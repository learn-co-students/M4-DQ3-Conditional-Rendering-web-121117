import React from 'react'
import MenuItem from './MenuItem'

const MenuBar = (props) => {

	
	return (
      <div className="ui four item menu">
            <a className={props.selectedItem === 'profile' ? "item active" : "item"} id="profile" onClick={props.handleClick}>
            	<i className="user large icon" id="profile"/>
            </a>

            <a className={props.selectedItem === 'photo' ? "item active" : "item"} id="photo"
						onClick={props.handleClick} >
            	<i className="photo large icon" id="photo"/>
            </a>

            <a className={props.selectedItem === 'cocktail' ? "item active" : "item"} id="cocktail"
						onClick={props.handleClick}>
            	<i className="cocktail large icon" id="cocktail"/>
            </a>

            <a className={props.selectedItem === 'pokemon' ? "item active" : "item"} id="pokemon"
						onClick={props.handleClick}> 
            	<i className=" themeisle large icon" id="pokemon"/>
            </a>
      </div>
      )

}

export default MenuBar