# == Schema Information
#
# Table name: ratings
#
#  id         :bigint(8)        not null, primary key
#  rating     :integer          not null
#  course_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Rating < ApplicationRecord
  validates :rating, presence: true
  validates :rating, numericality: {
    only_integer: true,
    greater_than_or_equal_to: 1,
    less_than_or_equal_to: 5
  }

  belongs_to :course

end
