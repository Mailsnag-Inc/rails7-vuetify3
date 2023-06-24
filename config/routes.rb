Rails.application.routes.draw do
  resources :blogs

  # Defines the root path route ("/")
  root "blogs#index"
end
