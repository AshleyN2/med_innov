class AddImageUrlToHospitals < ActiveRecord::Migration[6.1]
  def change
    add_column :hospitals, :image_url, :string
  end
end
