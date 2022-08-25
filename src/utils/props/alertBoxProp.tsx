export enum Alert {
    Error,
    Info,
}

export default interface alertBoxProp {
    message: string,
    click: () => void,
    type: Alert
}
