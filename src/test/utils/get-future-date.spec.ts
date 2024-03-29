import { expect, test } from "vitest";
import { getFutureDate } from "./get-future-date"

test('increase date with one year', () => {
    const year = new Date().getFullYear()

    expect(getFutureDate(`${year}-08-10`)).toEqual(2023)
})