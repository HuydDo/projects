Rails.application.routes.draw do
  resources :users
  # get 'appointment/:id', to: 'appointment#show', as: 'appointment_show'
  # post 'appointment/create'
  # get 'coaches', to: 'coach#index'
  # get 'coach/:id', to: 'coach#show', as: 'coach_show'
  get 'student/new'
  # get 'student/logout'
  # post 'student/create'

  
  root to: 'home#index'
end
