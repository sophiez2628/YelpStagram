class Api::SearchResultsController < ApplicationController
  def index
    search_results = Place.search(params[:find]);
    debugger;
  end
end
