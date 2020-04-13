Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :cars do
      resources :documents
    end

    resources :users do
      resources :cars
    end

    post 'cars/all_cars', :to => 'cars#all_cars'
  end 
end
