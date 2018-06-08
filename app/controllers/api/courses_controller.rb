class Api::CoursesController < ApplicationController
  def index
    @courses = Course.includes(:ratings).all
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
