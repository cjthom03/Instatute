@results.each do |course|
  json.set! course.id do
    json.extract! course, :id, :title
  end
end
