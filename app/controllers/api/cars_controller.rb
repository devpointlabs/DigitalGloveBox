class Api::CarsController < ApplicationController
  before_action :authenticate_user!
  # before_action :set_cars, only: [:show, :update, :destroy]

  def index
    user = User.find(params[:user_id])
    render json: user.cars
  end

  def show
    user = User.find(params[:user_id])
    render json: user.cars.find(params[:id])
  end

  def create
    user = User.find(params[:user_id])
    render json: user.cars.create(card_params)

    # if user.cars.save
     
    # else
    #   render json: current_user.cars.errors, status: 422
    # end
    
  end

  def update
    user = User.find(params[:user_id])
    car = user.cars.find(params[:id])
    car.update_attributes(car_params)
    render json: user.cars.find(params[:id])
  end

  def destroy
    car = current_user.cars.find(params[:id])
    car.destroy
    # car.find(params[:id]).destroy
    
  end


  
  private 

  # def set_cars
  #   car = current_user.cars.find(params[:id])
  # end

  def car_params
    params.require(:car).permit(:make,:model,:year,:color,:license_plate,:policy_exp,:roadside_ass,:miles,:vin,:policy_number,:insurance_prov_num,:user_id)
  end 
end

