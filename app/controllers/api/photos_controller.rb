class Api::PhotosController < ApplicationController
  def create
  end

  def index
    photos = Photo.find(params[:place_id].to_i)
    render json: photos
  end

end
