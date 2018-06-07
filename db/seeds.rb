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
    title: "Course #{i} Title: this title is extra long to test css wraps",
    author: "Author Name #{i}",
    description: "#{i} This description does not matter yet, it is not being used.",
    image_url: "https://xyleme.com/wp-content/uploads/2015/04/Image-Blog-Want-To-Know-What-Personalized-Learning-Looks-Like.png"
  )
end

#RATINGS
#-----------------------------------------------------------------------
Course.all.each do |course|
  num_ratings = 25 + rand(26)
  num_ratings.times do
    rating = 1 + rand(5)
    Rating.create!(rating: rating, course_id: course.id)
  end
end
