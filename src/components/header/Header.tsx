import "./styles.css"
import React from 'react'
import headerProp from "../../utils/props/headerProp"

export const Header = React.memo<headerProp>(({ data }) => {
    console.log("render header");

    return (

        <header className="header">
            {data.map(el => {
                return <div key={el.title} className="header-section">
                    <h3>{el.title}</h3>
                    <span>&#128994;{" " + el.content}</span>
                </div>
            })}
        </header>
    )
}, (prev, curr) => {
    if (prev.data[2].content != curr.data[2].content)
        return false
    else
        return true
}
)
