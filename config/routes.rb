Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  
  namespace :api do

    resources :cars do
      resources :documents
    end

    resources :users do
      resources :cars
    end

  end 
end
