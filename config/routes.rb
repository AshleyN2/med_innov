Rails.application.routes.draw do
  
  resources :appointments
  resources :patients
  resources :doctors
  resources :hospitals

  # Hospital Auth
  post '/hospitallogin', to: 'hospitals_sessions#create'
  delete '/hospitallogout', to: 'hospitals_sessions#destroy'
  post '/hospitalsignup', to: 'hospitals#create'
  get '/hospital', to: 'hospitals#show'
  #get '/hospitals', to: 'hospitals#index'

  # Patient Auth
  post '/patientlogin', to: 'patients_sessions#create'
  delete '/patientlogout', to: 'patients_sessions#destroy'
  post '/patientsignup', to: 'patients#create'
  get '/patient', to: 'patients#show'

  post '/my_appointments' to: 'appointments#create'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end