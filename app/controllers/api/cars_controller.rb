class Api::CarsController < ApplicationController
  before_action :authenticate_user!
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
    @car.update_attributes(car_params)
    render json: @car
  end

  def destroy
    @car.destroy
  end

  
  private 
  def set_cars
    @car = current_user.cars.find(params[:id])
  end

  def car_params
    params.require(:car).permit(:make,:model,:year,:color,:license_plate,:policy_exp,:roadside_ass,:miles,:vin,:policy_number,:insurance_prov_num,:user_id,:insurance_provider)
  end 
end

