Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
resources :users, only: [:new, :create]
  root 'users#new'
  get '/404', to: 'errors#not_found'
end
