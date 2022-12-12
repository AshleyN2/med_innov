class AppointmentsController < ApplicationController
    
    def index
        appointments = Appointment.all
        render json: appointments, status: :ok
    end

    def show
        appointment = Appointment.find(params[:id])
        render json: appointment, status: :ok
    end

    def create
        patient = Patient.find(params[:patient_id])
        hospital = Hospital.find(params[:hospital_id])
        appointment = patient.appointments.create!(appointment_params) || hospital.appointments.create!(appointment_params)
        render json: appointment, status: :created
    end

    def destroy
        appointment = Appointment.find(params[:id])
        appointment.destroy
        render json: {message:['Successfully deleted!']}
    end

    private

    def appointment_params
        params.permit(:patient_id, :doctor_id, :hospital_id, :diagnosis, :date)
    end
end
