class Api::CompletionsController < ApplicationController
  def create
    @completion = Completion.new(completion_params)
    if @completion.save
      render :show
    else
      render json: @completion.errors.full_messages, status: 422
    end
  end

  def destroy
    @completion = Completion.find(params[:id])
    if @completion
      @completion.destroy
      render :show
    else
      render json: ["Completion record not found"], status: 404
    end
  end

  private

  def completion_params
    params.require(:completion).permit(:user_id, :lesson_id)
  end

end
