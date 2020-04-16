class AddFileToCar < ActiveRecord::Migration[6.0]
  def change
    add_column :cars, :file, :string
  end
end
