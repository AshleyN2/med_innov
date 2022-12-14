class Patient < ApplicationRecord
    has_many :appointments
    has_many :doctors, through: :appointments
    has_many :hospitals, through: :appointments
    has_secure_password
end
