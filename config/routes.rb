Rails.application.routes.draw do
  root 'homes#index'
    resources :products, only: [:index, :new, :create]
end
