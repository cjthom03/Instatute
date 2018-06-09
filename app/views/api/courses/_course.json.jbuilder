#Sample slice of state to be returned
# {
#   id: 15,
#   title: "How to become a professional photographer",
#   description: "This course will teach you to become a professional photographer!",
#   img_url: "https://cdn.pixabay.com/photo/2013/11/03/14/56/204842_960_720.jpg",
#   lesson_count: 4,
#   total_duration: 2680,
#   avg_rating: 4.1,
#   rating_count: 803
# }

json.set! course.id do
  json.extract! course, :id, :title, :author, :description, :image_url
  json.avg_rating number_with_precision(course.avg_rating(course.ratings), precision: 1)
  json.rating_count course.ratings.length
  json.lesson_count course.lessons.length
  json.total_duration course.total_duration(course.lessons)
end
