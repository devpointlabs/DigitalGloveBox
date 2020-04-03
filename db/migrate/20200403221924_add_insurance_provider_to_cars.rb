class AddInsuranceProviderToCars < ActiveRecord::Migration[6.0]
  def change
    add_column :cars, :insurance_provider, :string
    remove_column :cars, :policy_exp, :date
    add_column :cars, :policy_exp, :string
  end
end
