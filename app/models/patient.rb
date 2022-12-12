class Patient < ApplicationRecord
    belongs_to :appointment
    
    has_secure_password
end
