class Api::SearchResultsController < ApplicationController
  def index
    search_results = Place.search(params[:find]);
    render json: search_results
  end

  def show
    place = Place.find(params[:place_id].to_i)
    render json: place
  end

end
