class Api::SearchResultsController < ApplicationController
  def index
    search_results = Place.search_names(params[:find]);
  end
end
