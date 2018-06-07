class Api::CoursesController < ApplicationController
  def index
    @courses = Course.includes(:ratings).all
    render :index
  end

  def show
    @course = Course.includes(:ratings).find_by_id(params[:id])
    render :show
  end
end
