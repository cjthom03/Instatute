import * as CompletionApiUtil from '../util/completion_api_util';


export const RECEIVE_COMPLETION = 'RECEIVE_COMPLETION';
export const REMOVE_COMPLETION = 'REMOVE_COMPLETION';

const receiveCompletion = completion => ({
  type: RECEIVE_COMPLETION,
  completion
});

const removeCompletion = completion => ({
  type: REMOVE_COMPLETION,
  completion
});

export const postCompletion = newCompletion => dispatch => (
  CompletionApiUtil.postCompletion(newCompletion)
    .then(completion => dispatch(receiveCompletion(completion)))
);

export const destroyCompletion = completionId => dispatch => (
  CompletionApiUtil.destroyCompletion(completionId)
    .then(completion => dispatch(removeCompletion(completion)))
);
