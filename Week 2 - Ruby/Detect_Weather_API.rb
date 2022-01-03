require 'net/http'
require 'json'

#Function To Detect Weather
def detect_weather(city)

    params = { #Parameters passed to the query
        :access_key => "1eca0554caf0f8a79c542f3d706481fc",  #API Key
        :query => city #Passing the Desired City Name
    }

    uri = URI('http://api.weatherstack.com/current')
    uri.query = URI.encode_www_form(params)
    json = Net::HTTP.get(uri)
    api_response = JSON.parse(json)

    puts "\nLocation   : #{api_response['location']['name']} (#{api_response['location']['country']})"
    puts "Feels Like : #{api_response['current']['feelslike']}°C"
    puts "Wind Speed : #{api_response['current']['wind_speed']} km/hr",""

end

#Asking the user to enter the desired city
puts "\nWelcome! Enter a city name to see Temp. Forcast"
city = gets.chomp

#Calling Function 
detect_weather(city)  
