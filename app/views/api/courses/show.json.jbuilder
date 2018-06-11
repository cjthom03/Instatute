
json.course do
  json.partial! 'api/courses/course', course: @course
end

json.lessons do
  @course.lessons.each do |lesson|
    json.set! lesson.id do
      json.extract! lesson, :id, :course_id, :title, :order_num, :content_url
      json.video_id lesson.getVideoID(lesson.content_url)
      json.duration lesson.formatDuration(lesson.content_duration)
    end
  end
end
