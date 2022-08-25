import "./styles.css"
import React, { useEffect, useMemo } from 'react'
import marketDataProp from "../../utils/props/marketDataProp"
import DataField from "./data-field/DataField"
import dataFieldProp, { DataFieldType } from "../../utils/props/dataFieldProp"
import convertNumbersIntoStrings from "../../utils/convertNumbersIntoStrings"

export const MarketDataComponent = React.memo<marketDataProp>(({ style, data }) => {

    const { coins_count, active_markets,
        total_mcap, total_volume,
        btc_d, eth_d, mcap_change,
        volume_change, avg_change_percent,
        volume_ath, mcap_ath } = data

    // TODO
    // const destructed = React.useMemo(() => destructObjectAsArray([4, 5, 2], data), [])

    return (
        <div className={`market-data ${style}`}>
            <div id="market-details">
                <DataField
                    style={DataFieldType.Detail}
                    title="Total Coins"
                    content={coins_count.toString()}
                />
                <DataField
                    style={DataFieldType.Detail}
                    title="Active Markets"
                    content={active_markets.toString()}
                />
                <DataField
                    style={DataFieldType.Detail}
                    title="Market Cap"
                    content={convertNumbersIntoStrings(total_mcap).toString()}
                />
                <DataField
                    style={DataFieldType.Detail}
                    title="Volume"
                    content={convertNumbersIntoStrings(total_volume).toString()}
                />
            </div>
            <hr />
            <div id="market-values">
                <DataField
                    style={DataFieldType.Value}
                    title="BTC Dominance"
                    content={btc_d + "%"}
                /><DataField
                    style={DataFieldType.Value}
                    title="ETH Dominance"
                    content={eth_d + "%"}
                /><DataField
                    style={DataFieldType.Value}
                    title="Market Cap Change"
                    content={mcap_change + "%"}
                /><DataField
                    style={DataFieldType.Value}
                    title="Volume Change"
                    content={volume_change + "%"}
                /><DataField
                    style={DataFieldType.Value}
                    title="Average Change"
                    content={avg_change_percent + "%"}
                />
            </div>
            <hr />
            <div id="market-history">
                <DataField
                    style={DataFieldType.History}
                    title="Volume ATH"
                    content={convertNumbersIntoStrings(volume_ath).toString()}
                /><DataField
                    style={DataFieldType.History}
                    title="Market Cap ATH"
                    content={convertNumbersIntoStrings(mcap_ath).toString()}
                />
            </div>
        </div>
    )
}, (prev, curr) => {
    if (prev.style !== curr.style || prev.data.mcap_change !== curr.data.mcap_change)
        return false
    return true
})
