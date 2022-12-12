class DoctorsController < ApplicationController

    def index
        doctors = Doctor.all
        render json: doctors, status: :ok
    end

    def show
        doctor = Doctor.find(params[:id])
        render json: doctor, status: :ok
    end

    def create
        hospital = Hospital.find(params[:hospital_id])
        doctor = hospital.doctors.create!(doctor_params)
        render json: doctor, status: :created
    end

    def update
        doctor = Doctor.find(params[:id])
        doctor.update!(doctor_params)
        render json: doctor, status: :ok
    end

    def destroy
        doctor = Doctor.find(params[:id])
        doctor.destroy
        render json: {}, status: :no_content
    end

    private

    def doctor_params
        params.permit(:name, :age, :speciality, :hospital_id)
    end
end
