json = ActiveSupport::JSON.decode(File.read('./db/seeds.json'))
json.each do |record|
  Pokemon.create!(record)
end
