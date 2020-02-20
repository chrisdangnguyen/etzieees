Rails.application.routes.draw do
  get 'api/category'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy, :show]
    get '/products/category', to: 'products#category'
    resources :products, only: [:create, :index, :show, :update, :destroy]
  
    
  end

end
