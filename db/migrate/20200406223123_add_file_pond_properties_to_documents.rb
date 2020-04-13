class AddFilePondPropertiesToDocuments < ActiveRecord::Migration[6.0]
  def change
  
      add_column :documents, :_relativePath, :string
      add_column :documents, :lastModified, :integer
      add_column :documents, :lastModifiedDate, :datetime
      add_column :documents, :size, :integer
      add_column :documents, :type, :string
      add_column :documents, :webkitRelativePath, :string
    
  end
end