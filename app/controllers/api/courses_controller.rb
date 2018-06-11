class Api::CoursesController < ApplicationController
  def index
    if params[:subscriptions] == "true" && current_user
      @courses = Course.joins(:subscriptions)
        .where(["subscriptions.user_id = ?", current_user.id])
    else
      @courses = Course.includes(:ratings, :lessons).all
    end
    render :index
  end

  def show
    @course = Course.includes(:ratings, :lessons).find_by_id(params[:id])

    if @course
      render :show
    else
      render json: ["Course not found"], status: 404
    end
  end
end
