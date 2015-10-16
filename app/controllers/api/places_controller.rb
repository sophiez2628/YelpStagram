class Api::PlacesController < ApplicationController
  def index
    @placeholder_image_url = Photo.find_by_user_id(0).url
    if params[:find]
      #includes method used in the controller
      @places = Place.search(params[:find]).includes(:photos, :reviews)
    else
      @places = Place.all.includes(:photos, :reviews)
    end
  end

  def show
    place = Place.find(params[:place_id].to_i)
    render json: place
  end

  def photo
    photo = Photo.find_one(params[:place_id].to_i)
    render json: photo
  end
end
