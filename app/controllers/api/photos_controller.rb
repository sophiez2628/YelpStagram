class Api::PhotosController < ApplicationController
  def create
    debugger;
    photo = Photo.new(photo_params)
    if photo.save
      render json: photo
    end
  end

  def index
    photos = Photo.find(params[:place_id])
    render json: photos
  end

  private
  def photo_params
    params.permit(:user_id, :place_id, :google_place_id, :url)
  end


end
