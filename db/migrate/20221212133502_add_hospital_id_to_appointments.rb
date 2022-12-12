class AddHospitalIdToAppointments < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :hospital_id, :integer
  end
end
