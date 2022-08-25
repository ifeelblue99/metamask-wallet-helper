export default function destructObjectAsArray(parts: number[], obj: Object) {

    /*
        convert an objects keys to arrays
        ex: obj: {
            name: "me" // string
            country: "UK"
            age: 2 // number
            year: 2022
        }
        destructObjectAsArray([2, 2], obj) // [["me", "UK"],[2, 2022]]
    */

    const partsLength = parts.reduce((total, current) => total += current)
    let objKeyCount = 0;
    for (const key in obj) {
        objKeyCount++
    }
    if (partsLength !== objKeyCount)
        throw new Error("Parts are longer than the object key count");

    const objValuesAsArray = Object.values(obj)

    let currentArray: string[] = []
    let destructured: Array<string[]> = []

    parts.forEach(iter => {
        currentArray = []
        for (let index = 0; index < iter; index++) {
            currentArray.push(objValuesAsArray.shift().toString())
        }
        destructured.push(currentArray)
    })
    return destructured
}