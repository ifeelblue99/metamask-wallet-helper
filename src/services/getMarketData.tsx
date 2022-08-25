import axios from "axios";
import { MARKET_DATA_URL } from "../config";

export interface MarketDataInterface {
    coins_count: number,
    active_markets: number,
    total_mcap: number,
    total_volume: number,
    btc_d: string,
    eth_d: string,
    mcap_change: string,
    volume_change: string,
    avg_change_percent: string,
    volume_ath: number,
    mcap_ath: number
}

export default async function getMArketData(): Promise<MarketDataInterface | null> {
    try {
        const result = await axios.get(MARKET_DATA_URL)
        return result.data[0]
    } catch (error) {
        console.log(error);
        return null
    }
}