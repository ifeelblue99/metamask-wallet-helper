// TO be FIXED import detectEthereumProvider from '@metamask/detect-provider';
export function isMetamaskExist(): boolean {
    /*
        check if metamask extension is installed
        return true or false
    */
    // TO be FIXED const provider = await detectEthereumProvider();    

    if (window.ethereum && window.ethereum.isMetaMask)
        return true
    else
        return false
}

export enum ResponseMSG {
    ERROR,
    OK
}
interface MetaMaskErrorObj {
    code: number,
    message: string,
}
export interface ResponseObj {
    result: ResponseMSG,
    msg: string | string[],
    chainID?: string
}
export enum ChainID {
    Ropsten = 3,
    Rinkeby = 4,
    Goerli = 5,
    Ethereum = 1,
    Binance = 56,
    Avalanche = 43114,
    Polygon = 137,
}
export async function getWalletAddress(): Promise<ResponseObj> {
    /*
        request metamask wallet address is metamask exist
        returns ResponseObj
    */
    let returnData: ResponseObj = { result: ResponseMSG.ERROR, msg: "Unknown" };

    if (isMetamaskExist() === false) {
        return returnData = { result: ResponseMSG.ERROR, msg: "MetaMask is not installed" }
    }
    await window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((res: string) => {
            returnData = { result: ResponseMSG.OK, msg: res }
        })
        .catch((err: MetaMaskErrorObj) => {
            returnData = { result: ResponseMSG.ERROR, msg: err.message }
        })

    return returnData
}

export function getChainID(): ResponseObj {
    /*
        request current chain id
    */
    let returnData: ResponseObj = { result: ResponseMSG.ERROR, msg: "Unknown" };

    if (isMetamaskExist() === false) {
        return returnData = { result: ResponseMSG.ERROR, msg: "MetaMask is not installed" }
    }

    const id = window.ethereum.networkVersion
    returnData = { result: ResponseMSG.OK, msg: id, chainID: ChainID[id] }

    return returnData
}
