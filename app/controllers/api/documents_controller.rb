class Api::DocumentsController < ApplicationController
  before_action :set_car
  before_action :set_document, only: [:update, :destroy,:show]

  def index
    render json: @car.documents
  end

   def create
  
    document = @car.documents.new(document_params)
    if document.save
      render json: document
    else 
      render json: {message: 'Did not Create'}
    end
  end

  def show
    render json: @car.@document
  end

  def update
    if @document.update(document_params)
      render json: @document
    else
      render json: {message: 'Did not update'}
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
    params.require(:document).permit(:name, :category, :file, :car_id)
  end
end
