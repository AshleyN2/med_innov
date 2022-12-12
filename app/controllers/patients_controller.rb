class PatientsController < ApplicationController

    skip_before_action :authorize, only: :create

    def create
        @patient = Patient.create!(patient_params)
        session[:patient_id] = @patient.id
        render json: @patient, status: :created
    end

    def show
        render json: @current_patient
        
    end

    def update
        @current_patient.update!(patient_params)
        render json: @current_patient
    end

    private

    def patient_params
        params.permit( :email, :name, :age, :gender, :location, :password, :password_confirmation)
    end
end
