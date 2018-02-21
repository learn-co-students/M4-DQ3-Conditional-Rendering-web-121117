import React from 'react'

const MenuBar = (props) => {
			console.log(props)
      /*

      The 'a' tags below are the menu items. Think about the way a menu
      should work. When you click a menu item, the button typically becomes
      'active' to indicate that it is currently selected. How could we achieve
      this programatically? What other behavior do we expect when we click
      on a menu item? Do we need state in this component, and if not, how can
      this component be made aware of what is currently the active menu item?

      */

	return (
      <div className="ui four item menu">
            <a className={props.currentView === "profile" ? "item active" : "item"} id="profile" onClick={props.handleChange}>
            	<i id="profile" className="user large icon"/>
            </a>

            <a className={props.currentView === "photo" ? "item active" : "item"} id="photo" onClick={props.handleChange}>
            	<i id="photo" className="photo large icon"/>
            </a>

            <a className={props.currentView === "cocktail" ? "item active" : "item"} id="cocktail" onClick={props.handleChange}>
            	<i id="cocktail" className="cocktail large icon"/>
            </a>

            <a className={props.currentView === "pokemon" ? "item active" : "item"} id="pokemon" onClick={props.handleChange}>
            	<i id="pokemon" className=" themeisle large icon"/>
            </a>
      </div>
      )

}

export default MenuBar
