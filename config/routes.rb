Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api do
    resources :search_results, only: [:index, :show]
    resources :reviews, only: [:create, :edit, :destroy, :index]
    resources :photos, only: [:index, :create]
  end

end
