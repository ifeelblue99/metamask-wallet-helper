export default function shortenString(str: string, len: number, addition?: string): string {
    /*
        Shorten string according to `len` and add `addition` string if provided
        
        ex:
            sampleStr = "Hello"
            shortenString(sampleStr, 4, "...") returns `hell...`
    */
    if (str.length <= len) {
        return str
    }

    return str.substring(0, len) + addition
}