import { Appointment } from '../entities/appointment'
import { AppointmentRepository } from '../repositories/appointments-repositories';

interface CreateAppointmentRequest {
    customer: string;
    startsAt: Date;
    endsAt: Date
}

type CreateAppointmentResponse = Appointment 


export class CreateAppointment {
    constructor (
        private appointmentsRepository: AppointmentRepository
    ) {}

    async execute ({
        customer,
        startsAt,
        endsAt
    }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
        const overLappingAppointment = await this.appointmentsRepository.findOverLappingAppointment(
            startsAt,
            endsAt
        )

        if (overLappingAppointment) {
            throw new Error('Another overlaps')
        }

        const appointment = new Appointment({
            customer,
            startsAt,
            endsAt
        })

        await this.appointmentsRepository.create(appointment)

        return appointment
    }
}