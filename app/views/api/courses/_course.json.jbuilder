#Sample slice of state to be returned
    #DOES NOT YET INCLUDE lesson_count, total_lesson_duration
# 15: {
#   id: 15,
#   title: "How to become a professional photographer",
#   description: "This course will teach you to become a professional photographer!",
#   img_url: "https://cdn.pixabay.com/photo/2013/11/03/14/56/204842_960_720.jpg",
#   avg_rating: 4.1,
#   rating_count: 803
# }

json.set! course.id do
  json.extract! course, :id, :title, :description, :image_url
  json.avg_rating course.avg_rating(course.ratings)
  json.rating_count course.ratings.count
end
