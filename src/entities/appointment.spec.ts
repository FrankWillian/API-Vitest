import { expect, test } from 'vitest'
import { Appointment } from './appointment'
import { getFutureDate } from '../test/utils/get-future-date'

test('create an appointment'), () => {
    const startsAt = new Date()
    const endsAt = new Date()

    endsAt.setDate(endsAt.getDate() + 1)

    const appointment = new Appointment({
        customer: 'John Doe',
        startsAt,
        endsAt
    })

expect(appointment).toBeInstanceOf(appointment)
expect(appointment.customer).toEqual('Frank')
}

test('cannot create an appointment with end date before'), () => {
    const startsAt = getFutureDate('2022-08-10')
    const endsAt = getFutureDate('2022-08-10')

    expect(() => {
        return new Appointment({
            customer: 'John Doe',
            startsAt: new Date,
            endsAt: new Date
        })
    }).toThrow()
}

test('cannot create an appointment with start date before now'), () => {
    const startsAt = getFutureDate('2022-08-10')
    const endsAt = getFutureDate('2022-08-10')

    expect(() => {
        return new Appointment({
            customer: 'John Doe',
            startsAt: new Date,
            endsAt: new Date
        })
    }).toThrow()
}