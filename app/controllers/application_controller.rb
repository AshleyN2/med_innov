class ApplicationController < ActionController::API
    include ActionController::Cookies
  
    before_action :authorize
  
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  
    
    private
  
    def authorize 
        @current_patient = Patient.find(session[:patient_id])
        @current_hospital = Hospital.find(session[:hospital_id])
        render json: { errors: ['unauthorized'] }, status: :unauthorized unless @current_patient || @current_hospital  
    end
  
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
  
  def render_not_found_response(exception)
          render json: { errors: exception.message }, status: :not_found
  end
  
    
  end