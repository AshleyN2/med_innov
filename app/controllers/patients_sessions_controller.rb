class PatientsSessionsController < ApplicationController

    skip_before_action :authorize, only: :create

    def create
        hospital = Patient.find_by(email: params[:username])
        if user&.authenticate(params[:password])
            session[:patient_id] = patient.id
            render json: patient
        else
            render json: { errors: ["Invalid email or password"] }, status: :unauthorized
        end
    end

    

    def destroy
        session.delete :patient_id
        render json {message:['Successfully logged out!']}
    end


end