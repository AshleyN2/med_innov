# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding data ..."

# Patient
puts "Seeding patients ..."
Patient.create!([
    {
        name: 'John', 
        age: 20, 
        email: 'john@gmail.com',
        location: 'Karen',
        gender: 'male',
        password: '123',
        password_confirmation: '123'
        
    }
])

Patient.create!([
    {
        name: 'Lola', 
        age: 20, 
        email: 'lola@gmail.com',
        location: 'Upperhill',
        gender: 'female',
        password: '123',
        password_confirmation: '123'
        
    }
])
puts "Seeding patients done!"

# Hospital
puts "Seeding hospitals ..."

Hospital.create!([
    {
        name: 'Karen Hospital',
        location: 'Karen',
        image_url: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGhvc3BpdGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        email: 'karenhospital@gmail.com',
        password: 'karen123',
        password_confirmation: 'karen123'
    }
])
Hospital.create!([
    {
        name: 'Nairobi Hospital',
        location: 'UpperHill',
        image_url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
        email: 'nairobihospital@gmail.com',
        password: 'nairobi123',
        password_confirmation: 'nairobi123'
    }
])

Hospital.create!([
    {
        name: 'Agakhan Hospital',
        location: 'Nairobi',
        image_url: 'https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80',
        email: 'agakhanhospital@gmail.com',
        password: 'agakhan123',
        password_confirmation: 'agakhan123'
    }
])

Hospital.create!([
    {
        name: 'MP Shah Hospital',
        location: 'Westlands',
        image_url: 'https://images.unsplash.com/photo-1666214277730-e9c7e755e5a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        email: 'mpshahhospital@gmail.com',
        password: 'mpshah123',
        password_confirmation: 'mpshah123'
    }
])
puts "Seeding hospitals done!"

# Doctor
puts "Seeding doctors ..."
Doctor.create!([
    {
        name: 'Dr. Kamau',
        age: 30,
        speciality: 'Cardiologist',
        hospital_id: 1
    }
])
puts "Seeding doctors done!"

# Appointment
puts "Seeding appointments ..."
Appointment.create!([
    {
        patient_id: 1,
        hospital_id: 1,
        diagnosis: 'Covid-19',
        date: '2022-12-12'
    }
])
puts "Seeding appointments done!"

puts "Seeding done!"