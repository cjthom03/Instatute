Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :courses, only: [:index, :show]
    resources :subscriptions, only: [:index, :create]
    resources :search, only: [:index]
    resources :completions, only: [:create, :destroy]
  end

end
