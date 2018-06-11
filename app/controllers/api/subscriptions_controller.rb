class Api::SubscriptionsController < ApplicationController
  def index
    if current_user
      @subscriptions = Subscription.where(["user_id = ?", current_user.id])
      render :index
    else
      render json: {}
    end
  end

  def create
    @subscription = Subscription.new(subscription_params)
    if @subscription.save
      render :show
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  private

  def subscription_params
    params.require(:subscription).permit(:user_id, :course_id)
  end
end
