class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.integer :patient_id
      t.integer :doctor_id
      t.string :diagnosis
      t.datetime :date

      t.timestamps
    end
  end
end
