require 'bundler'
Bundler.require
require_relative 'app'

port = if ENV['RACK_ENV'] == 'production'
    ENV['PORT']
else
    9292
end

Rack::Server.start(
    Port: port,
    Host: '0.0.0.0',
    app: Server,
    SSLEnable: false
)