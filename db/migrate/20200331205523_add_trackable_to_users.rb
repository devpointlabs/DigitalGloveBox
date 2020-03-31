class AddTrackableToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :sign_in_count, :integer, :default => 0
    add_column :users, :current_sign_in_at, :datetime
    add_column :users, :last_sign_in_at, :datetime
    add_column :users, :current_sign_in_ip, :string
    add_column :users, :last_sign_in_ip, :string
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :postal_code, :integer
    add_column :users, :DOB, :date
    add_column :users, :comm_prefs, :boolean
    add_column :users, :phone_number, :string


  end
end

