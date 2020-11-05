require "sinatra"

class Server < Sinatra::Base
    get "/" do
        File.read(File.join('views', 'index.html'))
    end
end