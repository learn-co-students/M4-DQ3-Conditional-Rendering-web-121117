import React from 'react'

const MenuItem = (props) => {
  return (
    <a className={props.selectedItem === props.id ? "item active" : "item"} id={props.id}>
      <i className={props.id + ' large icon'} id={props.id}/>
    </a>
  )
}
export default MenuItem
