class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :gender, :location
end
