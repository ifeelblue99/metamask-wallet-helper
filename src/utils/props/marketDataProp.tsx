import { MarketDataInterface } from "../../services/getMarketData";

export enum MarketDataLoadingStyle {
    Loading = "market-data-loading",
    Loaded = ""
}

export default interface marketDataProp {
    data: MarketDataInterface,
    style: MarketDataLoadingStyle
}