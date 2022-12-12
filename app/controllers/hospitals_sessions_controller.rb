class HospitalsSessionsController < ApplicationController

    skip_before_action :authorize, only: :create

    def create
        hospital = Hospital.find_by(email: params[:username])
        if user&.authenticate(params[:password])
            session[:hospital_id] = hospital.id
            render json: hospital
        else
            render json: { errors: ["Invalid email or password"] }, status: :unauthorized
        end
    end

    

    def destroy
        session.delete :hospital_id
        render json {message:['Successfully logged out!']}
    end


end