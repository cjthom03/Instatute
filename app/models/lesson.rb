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
  validates :title, :order_num, :content_url,
    :content_duration, presence: true

  belongs_to :course

  def formatDuration(duration = self.content_duration)
    mins = duration / 60
    secs = (duration) % 60
    secs = secs < 10 ? "0#{secs}" : "#{secs}"
    "#{mins}:#{secs}"
  end

end