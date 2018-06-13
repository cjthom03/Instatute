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
  include PgSearch
  validates :title, :author, :description, :image_url, presence: true

  has_many :ratings
  has_many :lessons
  has_many :subscriptions

  pg_search_scope :search_full_text,
    against: {
      title: 'A',
      description: 'B'},
    using: {
      tsearch: {prefix: true, any_word: true}
    }

  def avgRating(ratings = self.ratings)
    (ratings.map{|r| r.rating }.reduce(:+)).fdiv(ratings.length).round(1)
  end

  def formatedTotalDuration(lessons = self.lessons)
    duration = lessons.map {|l| l.content_duration }.reduce(:+)
    mins = duration / 60
    case mins
    when 0...60
      "#{mins} mins"
    when 60..75
      "1 hour"
    else
      hours = mins / 60
      case mins % 60
      when 0...16
        "#{hours} hours"
      when 16...46
        "#{hours}.5 hours"
      else
        "#{hours + 1} hours"
      end
    end
  end
end
