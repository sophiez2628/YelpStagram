Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api do
    resources :search_results, only: [:index]
  end

  namespace :api do
    resources :reviews, only: [:create, :edit, :destroy]
  end
end
