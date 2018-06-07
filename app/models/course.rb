# == Schema Information
#
# Table name: courses
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  author      :string           not null
#  description :text             not null
#  image_url   :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Course < ApplicationRecord
  validates :title, :author, :description, :image_url, presence: true

  has_many :ratings

  # Add functions to gather the number of ratings & the avg rating?
end
