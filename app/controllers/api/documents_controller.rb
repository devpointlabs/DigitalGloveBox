class Api::DocumentsController < ApplicationController
  before_action :set_car
  before_action :set_document, only: [:update, :destroy,:show]

  def index
    render json: @car.documents
  end

  #  def create
  #   binding.pry
  #   document = @car.documents.new(document_params)
   
  #   if document.save
  #     render json: document
  #   else 
  #     render json: {message: 'Did not Create'}
  #   end
  # end

  def show
    render json: @car.document
  end

  def create
    document = @car.documents.new
    document.name = params[:name] ? params[:name] : document.name
    document.category = params[:category] ? params[:category] : document.category
    document.car_id = params[:car_id] ? params[:car_id] : document.car_id
    
    file = params[:filepond]

    if file
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, :resource_type => :raw)
      
        document.file = cloud_image['secure_url']
      end
    end
    if document.save
      render json: @document
    else
      render json: { errors: @document.errors.full_messages }, status: 422
    end
  end

  def destroy
    @document.destroy
  end



  private

  def set_car
    @car = Car.find(params[:car_id])
  end

  def set_document
    @document = Document.find(params[:id])
  end

  def document_params
    params.require(:document).permit(:size, :lastModified, :_relativePath, :lastModifiedDate, :name, :category, :file, :car_id, :webkitRelativePath, :type,)
  end
end
