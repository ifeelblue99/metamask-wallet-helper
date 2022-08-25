export enum DataFieldType {
    Detail = "data-field-details",
    Value = "data-field-values",
    History = "data-field-history"
}

export default interface DataFieldInterface {
    style: DataFieldType,
    title: string,
    content: string
}