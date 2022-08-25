import axios from "axios";
import getERC20TokenUrl, { ERCTokenRequestUrl } from "../utils/getERCTokenUrl";

export default async function getOwnedTokens(urlSchema: ERCTokenRequestUrl) {
    try {
        const url: string = getERC20TokenUrl(urlSchema)

        const result = await axios.get(url)
        console.log(result)
    } catch (error) {
        console.log(error);

    }
}