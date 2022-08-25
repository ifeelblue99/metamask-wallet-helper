import convertNumbersIntoStrings from "../../utils/convertNumbersIntoStrings"
import destructObjectAsArray from "../../utils/destructObjectAsArray"
import generatePaginationIndexes from "../../utils/generatePaginationIndexes"
import getERC20TokenUrl from "../../utils/getERCTokenUrl"
//import metamask from "../../utils/metamask"
import shortenString from "../../utils/shortenString"

import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

describe("Utils test", () => {
    test("Should shorten numbers", () => {
        expect("1K").toBe(convertNumbersIntoStrings(1000))
        expect("3M").toBe(convertNumbersIntoStrings(3_000_000))
        expect("13M").toBe(convertNumbersIntoStrings(13_009_000))
    })
})