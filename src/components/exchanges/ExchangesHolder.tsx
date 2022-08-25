import "./styles.css"
import React from "react"
import { useEffect, useState } from 'react'
import getExchanges, { Exchangesİnterface } from "../../services/getExchanges"
import { ExchangeInfo } from "./exchange-info/ExchangeInfo"
import { ExchangesList } from "./exchanges-list/ExchangesList"
import getExchange from "../../services/getExchange"
import LoadingAnim, { LoadingAnimStyleType } from "../loading-anim/LoadingAnim"

export const ExchangesHolder = React.memo(() => {
    const [exchanges, setExchanges] = useState<Exchangesİnterface[]>([{ id: "none", name: "none" }])
    const [selectedExchange, setSelectedExchange] = useState("1bch")
    const [currentExchange, setCurrentExchange] = useState({
        name: "none",
        year_established: 0,
        country: "",
        description: "",
        url: "",
        image: "",
        facebook_url: "",
        reddit_url: "",
        telegram_url: "",
        slack_url: "",
        other_url_1: "",
        other_url_2: "",
        twitter_handle: "",
        has_trading_incentive: false,
        centralized: false,
        public_notice: "",
        alert_notice: "",
        trust_score: 0,
        trust_score_rank: 0,
        trade_volume_24h_btc: 0,
        trade_volume_24h_btc_normalized: 0,
    })
    const [isExchangeLoading, setIsExchangeLoading] = useState(false)

    useEffect(() => {
        if (exchanges.length < 10) {
            getExchanges().then(res => {
                if (res === null) {
                    return
                }
                setExchanges(res)
            })
        }
        if (currentExchange.name !== selectedExchange.toUpperCase()) {
            setIsExchangeLoading(true)
            getExchange(selectedExchange).then(res => {
                if (res !== null) {
                    setCurrentExchange(res)
                    setIsExchangeLoading(false)
                } else {
                    setIsExchangeLoading(false)
                }
            })
        }
    }, [selectedExchange])



    return (
        <div className="exchanges-holder">
            <ExchangesList click={(id) => setSelectedExchange(id)} exchangeData={exchanges} />
            {isExchangeLoading ? <LoadingAnim message="Exchange is Loading..." loaderStyle={LoadingAnimStyleType.Custom} /> :
                <ExchangeInfo {...currentExchange} />}
        </div>
    )
})
