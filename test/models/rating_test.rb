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

require 'test_helper'

class RatingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
