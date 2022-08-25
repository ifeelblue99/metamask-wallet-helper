import "./styles.css"
import React from 'react'
import buttonProp from "../../../utils/props/buttonProp"

const DisabledBtn: React.FC<buttonProp> = ({message}) => {
  return (
    <button className="button disabled-btn">{message}</button>
  )
}

export default DisabledBtn