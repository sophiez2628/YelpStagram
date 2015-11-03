class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user && user.id == 2
      sign_in(user)
      render json: user
    elsif user
      sign_in(user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid username or password"]
      render :new
    end

  end

  def destroy
    sign_out
    render json: {}
  end
end
