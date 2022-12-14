class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :patient_id, :diagnosis, :date, :hospital
  belongs_to :patient
  belongs_to :hospital
end
