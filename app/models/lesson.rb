# == Schema Information
#
# Table name: lessons
#
#  id               :bigint(8)        not null, primary key
#  course_id        :integer          not null
#  title            :string           not null
#  order_num        :integer          not null
#  content_url      :string           not null
#  content_duration :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Lesson < ApplicationRecord
end
