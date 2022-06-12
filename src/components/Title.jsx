import React, { Children } from 'react'

function Title({title, style, children}) {
  return (
    <h1 style={{color: 'white', ...style}}>{title ? title: children}</h1>
  )
}

export default Title