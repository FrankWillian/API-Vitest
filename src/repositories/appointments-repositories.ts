import { Appointment, AppointmentProps } from './../entities/appointment';

export interface AppointmentRepository {
    create(appointment: Appointment): Promise<void>;
    findOverLappingAppointment(startsAr: Date,endsAt: Date): Promise<Appointment | null>
}