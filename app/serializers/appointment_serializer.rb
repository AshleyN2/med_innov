class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :patient_id, :doctor_id, :diagnosis, :date
end
