class CreateDoctors < ActiveRecord::Migration[6.1]
  def change
    create_table :doctors do |t|
      t.string :name
      t.string :age
      t.string :speciality
      t.integer :hospital_id

      t.timestamps
    end
  end
end
