class Api::CarsController < ApplicationController
  # before_action :authenticate_user! 
  before_action :set_cars, only: [:show, :update, :destroy]

  def index
    render json: current_user.cars
  end

  # def all_cars
  #   render json: 
  #   binding.pry
  # end

  def show
    render json: @car
  end

  def create
    render json: current_user.cars.create(car_params)
  end

  def update
  
      file = params[:filepond]
      if file
        begin
          ext = File.extname(file.tempfile)
          cloud_image = Cloudinary::Uploader.upload(file, :resource_type => :raw)
        
          @car.file = cloud_image['secure_url']
        end
      else
        @car.update_attributes(car_params)
      end
      if @car.save
        render json: @car
      else
        render json: { errors: @car.errors.full_messages }, status: 422
      end

  end

  def destroy
    @car.destroy
  end

  
  private 
  def set_cars
    @car = Car.find(params[:id])
  end

  def set_user
    @user = User.find(params[:car_id])
  end

  def car_params
    params.require(:car).permit(:make,:model,:year,:color,:license_plate,:policy_exp,:roadside_ass,:miles,:vin,:policy_number,:insurance_prov_num,:user_id,:insurance_provider, :file)
  end 
end

