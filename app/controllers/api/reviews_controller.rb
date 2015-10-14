class Api::ReviewsController < ApplicationController
  def create
    review = Review.new(review_params)
    if review.save
      render json: review
    end 
  end

  private
  def review_params
    params.permit(:rating, :body, :author_id, :place_id)
  end
end
