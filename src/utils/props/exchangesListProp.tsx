import { Exchangesİnterface } from "../../services/getExchanges"

export default interface ExchangesListInterface {
    exchangeData: Exchangesİnterface[],
    click: (id: string) => void,
}