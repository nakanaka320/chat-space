Rails.application.routes.draw do
  get 'messages/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'messages#index'
  get 'messages' => 'messages#user'
  # create 'messages' => 'messages#new'
end
