class HospitalsController < ApplicationController

    skip_before_action :authorize, only: :create

    def create
        @hospital = Hospital.create!(hospital_params)
        session[:hospital_id] = @hospital.id
        render json: @hospital, status: :created
    end

    def show
        render json: @current_hospital
        
    end

    def update
        @current_hospital.update!(hospital_params)
        render json: @current_hospital
    end

    private

    def hospital_params
        params.permit( :email, :name, :location, :password, :password_confirmation)
    end
end
