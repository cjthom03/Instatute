
export const postCompletion = completion => (
  $.ajax({
    method: 'POST',
    url: 'api/completions',
    data: { completion }
  })
);

export const destroyCompletion = completionId => (
  $.ajax({
    method: 'DELETE',
    url: `api/completions/${completionId}`
  })
);
