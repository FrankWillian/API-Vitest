import { AppointmentRepository } from './../repositories/appointments-repositories';
import { Appointment } from '../entities/appointment';
import { CreateAppointment } from './create-appointment';
import { describe, expect, it } from 'vitest'
import { InMemoryAppointmentRepository } from '../repositories/in-memory-appointments';


describe('Create Appointment'), () => {
    it('should be able to create an  appointment', () => {

        const appointmentRepository = new InMemoryAppointmentRepository()
        const createAppointment = new CreateAppointment(
            appointmentRepository
        )
        const startsAt = new Date()
        const endsAt = new Date()

        startsAt.setDate(startsAt.getDate() + 1)
        endsAt.setDate(endsAt.getDate() + 2)

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt: new Date,
            endsAt: new Date
        })).resolves.toBeInstanceOf(Appointment)
    })
}