json.set! @completion.lesson_id do
  json.extract! @completion, :id, :lesson_id, :user_id
end
