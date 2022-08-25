import axios from "axios";
import { COINGECKO_EXCHANGES_URL } from "../config"

export interface ExchangeInterface {
    name: string,
    year_established: number,
    country: string,
    description: string,
    url: string,
    image: string,
    facebook_url: string,
    reddit_url: string,
    telegram_url: string,
    slack_url: string,
    other_url_1: string,
    other_url_2: string,
    twitter_handle: string,
    has_trading_incentive: boolean,
    centralized: boolean,
    public_notice: string,
    alert_notice: string,
    trust_score: number,
    trust_score_rank: number,
    trade_volume_24h_btc: number,
    trade_volume_24h_btc_normalized: number,

}

export default async (exchangeId: string): Promise<ExchangeInterface | null> => {
    try {
        const url = COINGECKO_EXCHANGES_URL + exchangeId
        console.log(url);

        const result = await axios.get(url)
        console.log(result);

        return result.data
    } catch (error) {
        console.log(error);
        return null
    }
}