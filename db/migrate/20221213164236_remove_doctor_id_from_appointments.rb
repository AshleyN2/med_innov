class RemoveDoctorIdFromAppointments < ActiveRecord::Migration[6.1]
  def change
    remove_column :appointments, :doctor_id, :integer
  end
end
