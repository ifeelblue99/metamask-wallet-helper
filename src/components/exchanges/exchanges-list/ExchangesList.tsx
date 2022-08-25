import "./styles.css"
import React, { useState } from 'react'
import exchangeListProp from "../../../utils/props/exchangesListProp"
import generatePaginationIndexes from "../../../utils/generatePaginationIndexes"

export const ExchangesList = React.memo<exchangeListProp>(({ exchangeData, click }) => {
    const [currentPage, setCurrentPage] = useState(0)
    const [pageIndexes, setPageIndexes] = useState(generatePaginationIndexes(currentPage, exchangeData.length, 10))
    const totalPages = React.useMemo(() => generatePaginationIndexes(0, exchangeData.length, 10)[2], [exchangeData.length])

    enum ButtonDirections {
        Back = "bck",
        Forward = "frw"
    }

    function goToPage(direction: ButtonDirections) {
        // Needed to be restructured
        if (direction === "frw") {
            if (currentPage + 1 > totalPages)
                return
            setCurrentPage(prev => prev + 1)
            setPageIndexes(generatePaginationIndexes(currentPage, exchangeData.length, 10));

        } else {
            if (currentPage === 0)
                return
            setCurrentPage(prev => prev - 1)
            setPageIndexes(generatePaginationIndexes(currentPage, exchangeData.length, 10));

        }
    }

    return (
        <div className="exchanges-list">
            <h2>Exchanges</h2>
            <div id="exchanges">
                {exchangeData.slice(pageIndexes[0], pageIndexes[1]).map(exc => {
                    return <span key={exc.id} onClick={() => click(exc.id)} id={exc.id} className="exchange">{exc.name}</span>
                })}
            </div>
            <div id="exchange-list-pagination">
                <button onClick={() => goToPage(ButtonDirections.Back)}>{"<"}</button>
                <span>Page: {currentPage + 1}</span>
                <button onClick={() => goToPage(ButtonDirections.Forward)}>{">"}</button>
            </div>
        </div>
    )
}, (prev, curr) => {
    if (prev.exchangeData.length !== curr.exchangeData.length) {
        return false
    } else {
        return true
    }
})
