class Doctor < ApplicationRecord
    belongs_to :hospitall
    has_many :appointments
    has_many :patients, through: :appointments  
end
