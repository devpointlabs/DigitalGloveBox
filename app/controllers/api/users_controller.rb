class Api::UsersController < ApplicationController
  # before_action :authenticate_user!
  def show
    user = User.find(params[:id])
    render json: user
  end  

  def update
    user = User.find(params[:id])
    user.first_name = params[:first_name] ? params[:first_name] : user.first_name
    user.last_name = params[:last_name] ? params[:last_name] : user.last_name
    user.email = params[:email] ? params[:email] : user.email
    user.phone_number = params[:phone_number] ? params[:phone_number] : user.phone_number
    user.postal_code = params[:postal_code] ? params[:postal_code] : user.postal_code
    user.comm_prefs = params[:comm_prefs] ? params[:comm_prefs] : user.comm_prefs
    user.image= params[:image] ? params[:image] : user.image
  
    image = params[:filepond]

    if image
      begin
        ext = File.extname(image.tempfile)
        cloud_image = Cloudinary::Uploader.upload(image, :resource_type => :raw)
        user.image = cloud_image['secure_url']
     
      end
    end
    if user.save
      render json: user
    else
      render json: { errors: user.errors.full_messages }, status: 422
    end
    
  end

end
