class AddEmailAndPasswordToHospitals < ActiveRecord::Migration[6.1]
  def change
    add_column :hospitals, :email, :string
    add_column :hospitals, :password_digest, :string
  end
end
