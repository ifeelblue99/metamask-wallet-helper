export default function creator(checkZeros: boolean, checkEmptyStrings: boolean, returningMessage: string, customEmptyValue?: any) {

    /*
        this is a higher order function

        simply returns an message if the provided value
        is "", null, undefined, 0 or a custom value like "null"

        ex: 
            val = "null"
            const checkEmpty = creator(true, true, "Error message", "null" //custom empty value)
            
            checkEmpty(val) // return "Error message"
            
            */

    return function checkEmptyValues(value: any) {

        if (customEmptyValue && value === customEmptyValue)
            return returningMessage
        if (value === undefined || value === null)
            return returningMessage
        if (checkEmptyStrings && value === "")
            return returningMessage
        if (checkZeros && value === 0)
            return returningMessage

        return value
    }
}