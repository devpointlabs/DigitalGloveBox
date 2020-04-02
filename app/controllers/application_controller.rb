class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken
        before_action :configure_permitted_parameters, if: :devise_controller?
      
        protected
      
        def configure_permitted_parameters
          devise_parameter_sanitizer.permit(:sign_up, keys:[:first_name, :last_name, :postal_code, :DOB, :comm_prefs, :phone_number, :email, :image])
        end
end
