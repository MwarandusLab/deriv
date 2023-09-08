Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
resources :users, only: [:new, :create]
  root 'users#new'
  match '*path', to: 'errors#not_found', via: :all
end
