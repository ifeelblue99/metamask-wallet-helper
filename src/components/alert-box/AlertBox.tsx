import "./styles.css"
import React from 'react'
import alertBoxProp, { Alert } from "../../utils/props/alertBoxProp"

const ErrorBox: React.FC<alertBoxProp> = ({ message, click, type }) => {
    return (
        <div style={{ backgroundColor: (type === Alert.Error ? "var(--dark-red)" : "var(--dark-green)") }} className="alert-box">
            <span>{message}</span>
            <button style={{ backgroundColor: (type === Alert.Error ? "red" : "green") }} onClick={click}>X</button>
        </div>
    )
}

export default ErrorBox