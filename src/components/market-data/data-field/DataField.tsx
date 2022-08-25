import "./styles.css"
import React from 'react'

import dataFieldProp from "../../../utils/props/dataFieldProp"

const DataField: React.FC<dataFieldProp> = ({ style, title, content }) => {
    return (
        <div className={"data-field " + style}>
            <span>{title}</span>
            <span style={content[0] === "-" ? { color: "var(--soft-red)" } : { color: "var(--soft-green)" }} className="data-field-content">{content}</span>
        </div >
    )
}

export default DataField