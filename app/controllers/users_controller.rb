class UsersController < ApplicationController
  def new
     @user = User.new
  end

  def create
     @user = User.new(user_params)
    if @user.save
      flash[:success] = 'User registered successfully!'
      redirect_to '/404', status: :moved_permanently
    else
      render 'new'
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
