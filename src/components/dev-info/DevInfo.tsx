import "./styles.css"
import React from 'react'

function DevInfo() {
    return (
        <div className="dev-info"><span>Developer:</span>
            <div className="icon-holder">
                <a href="github.com/ifeelblue99" className="dev-icon">
                    <img src="https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png" alt="github" />
                </a>
                <a href="https://twitter.com/ifeelblue13" className="dev-icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="twitter" />
                </a>
            </div>
        </div>
    )
}

export default DevInfo