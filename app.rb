require 'sinatra'

set :static, true

get '/' do
  erb :index
end