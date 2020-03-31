class Api::CarsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_car, only: [:show, :update, :destroy]
  before_action :set_user

  def index
    render json user.cars
  end

  def show
    render json: user.create
  end

  def create
    render json: user.cars.create(car_params)
  end

  def update
    # come back later
  end

  def destroy
    Car.find(params[:id]).destory
  end

  private 

  def set_car
    @car = Car.find(params[:id])
  end

  def set_user
    @user = User.find(params[:current_user])
  end 

  def car_params
    params.require(:car).permit()
  end 
end
