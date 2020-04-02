class Api::CarsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_cars, only: [:show, :update, :destroy]

  def index
    render json: current_user.car.all
  end

  def show
    render json: current_user.car
  end

  def create
    car = current_user.cars.new(car_params)

    if current_user.cars.save
      render json: car
    else
      render json: current_user.cars.errors, status: 422
    end
    
  end

  def update
    if current_user.car.update(car_params)
      render json: current_user.car
    else
      render json: current_user.cars.errors, status:422
    end
  end

  def destroy
    @car.destroy
  end


  
  private 

  def set_cars
    @car = current_user.cars.find(params[:id])
  end

  def car_params
    params.require(:car).permit(:make,:model,:year,:color,:license_plate,:policy_exp,:roadside_ass,:miles,:vin,:policy_number,:insurance_prov_num,:user_id)
  end 
end

