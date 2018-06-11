json.set! subscription.course_id do
  json.extract! subscription, :course_id, :user_id, :id
end
