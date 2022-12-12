class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :speciality, :hospital_id
end
