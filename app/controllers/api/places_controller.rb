class Api::PlacesController < ApplicationController
  def index
    if params[:find]
      @places = Place.search(params[:find]).includes(:photos)
    else
      @places = Place.all.includes(:photos)
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
