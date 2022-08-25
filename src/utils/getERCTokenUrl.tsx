export interface ERCTokenRequestUrl {
    baseUrl: string,
    module: string,
    action: TokenType,
    address: string,
    page: number,
    offset: number,
    apiKey: string,
}
export enum TokenType {
    ERC20 = "addresstokenbalance",
    ERC271 = "addresstokennftbalance"
}
export default function getERC20TokenUrl(url: ERCTokenRequestUrl): string {
    /*
        function that returns an Etherscan PRO api string
        to get ERC20 tokens those are owned by `address`
    */
    const { baseUrl, module, action, address, page, offset, apiKey } = url

    return `${baseUrl}
            ?module=${module}
            &action=${action}
            &address=${address}
            &page=${page}
            &offset=${offset}
            &apikey=${apiKey}`
}