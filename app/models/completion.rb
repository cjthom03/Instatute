# == Schema Information
#
# Table name: completions
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  lesson_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Completion < ApplicationRecord
  validates :user_id, uniqueness: { scope: :lesson_id,
    message: "cannot complete the same lesson more than once"}


  belongs_to :user
  belongs_to :lesson
end
