import axios from "axios";
import { COINGECKO_EXCHANGES_URL } from "../config";

export interface Exchangesİnterface {
    id: string,
    name: string
}

export default async function getExchanges(): Promise<Exchangesİnterface[] | null> {
    try {
        const url = COINGECKO_EXCHANGES_URL + "list"

        const result = await axios.get(url)

        return result.data
    } catch (error) {
        console.log(error);
        return null
    }
}