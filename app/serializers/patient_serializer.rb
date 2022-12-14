class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :gender, :location
  has_many :appointments
end
