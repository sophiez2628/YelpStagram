class Api::ReviewsController < ApplicationController
  def create
    review = Review.new(review_params)
    if review.save
      render json: review
    end
  end

  def index
    @reviews = Review.fetch(params[:place_id].to_i).includes(:user)
  end

  private
  def review_params
    params.permit(:rating, :body, :author_id, :place_id)
  end
end
