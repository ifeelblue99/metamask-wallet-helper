export default function intToString(value: number) {
    /*
        convert numbers into short strings

        ex:
            num = 36_000_000 // a million
            intoString(num) // return 36M

            num = 2_000
            intoString(num) // return 2K

            num = 5_000_000_000 // 5 billion
            intoString(num) // return 5Bn

    */
    return new Intl.NumberFormat('en-US', { maximumFractionDigits: 1, notation: "compact", compactDisplay: "short" }).format(value);
}
