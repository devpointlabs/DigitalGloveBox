class CreateCars < ActiveRecord::Migration[6.0]
  def change
    create_table :cars do |t|
      t.string :make
      t.string :model
      t.integer :year
      t.string :color
      t.string :license_plate
      t.date :policy_exp
      t.boolean :roadside_ass
      t.integer :miles
      t.string :vin
      t.string :policy_number
      t.string :insurance_prov_num
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
