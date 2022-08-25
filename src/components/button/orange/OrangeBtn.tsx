import "./styles.css"
import React from 'react'
import buttonProp from "../../../utils/props/buttonProp"

const OrangeBtn: React.FC<buttonProp> = ({message, click}) => {
  return (
    <button onClick={click} className="button orange-btn">{message}</button>
  )
}

export default OrangeBtn