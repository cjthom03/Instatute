# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#----Can be used to delete the tables, but prefer using 'rails db:setup' instead
# [User, Course].each do |table|
#   ActiveRecord::Base.connection.execute("TRUNCATE #{table.table_name}")
# end

#USERS
#-----------------------------------------------------------------------
User.create!(
  full_name: "Demo User", email: "fluffy_Kittens_187@kitties.com", password: "password123"
)

User.create!(
  full_name: "Charles Thomas", email: "cjthom03@gmail.com", password: "password"
)

#COURSES
#-----------------------------------------------------------------------

10.times do |i|
  Course.create!(
    title: "Course #{i+1} Title: this title is extra long to test css wraps",
    author: "Author Name #{i+1}",
    description: "This description ##{i+1}does not matter yet, it is not being used.",
    image_url: "https://xyleme.com/wp-content/uploads/2015/04/Image-Blog-Want-To-Know-What-Personalized-Learning-Looks-Like.png"
  )
end

#RATINGS
#-----------------------------------------------------------------------
Course.all.each do |course|
  num_ratings = 45 + rand(46)
  num_ratings.times do
    rating = 3 + rand(3)
    Rating.create!(rating: rating, course_id: course.id)
  end

  num_courses = course.id + 5
  num_courses.times do |n|
    duration = 120 + rand(1800)
    Lesson.create!(
      course_id: course.id,
      title: "The only lesson there is. (Also, some extra text is here to test css wraps).",
      order_num: n + 1,
      content_url: "https://www.youtube.com/watch?v=U9t-slLl30E",
      content_duration: duration)
  end
end
