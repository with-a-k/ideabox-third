Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :ideas, only: [:index, :create, :update, :destroy]
    end
  end

  root 'client#index'
end
