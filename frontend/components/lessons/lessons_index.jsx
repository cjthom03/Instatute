import React from 'react';

import LessonsIndexItem from './lessons_index_item';

class LessonsIndex extends React.Component {

  componentWillReceiveProps(nextProps) {
    debugger;
    if(this.props.match.params.courseId !== nextProps.match.params.courseId){
      this.props.clearSubscriptionErrors();
    }
  }

  componentWillUnmount() {
    this.props.clearSubscriptionErrors();
  }

  render(){
    let lessons = this.props.lessons;
    debugger;
    return(
      <div className="lessons-main">
        <div className="lessons-index-container">
            <div>
              <ul>
                {this.props.subscriptionErrors.map((err, i) =>
                  (<li className="lesson-index-errors" key={i}>{err}</li>))}
              </ul>
            </div>
            <div className="lessons-index-header">All Lessons</div>
            {lessons.map( lesson =>
              <LessonsIndexItem
                key={lesson.id}
                lesson={lesson}
                subscribed={this.props.subscribed}
                receiveSubcriptionErrors={this.props.receiveSubcriptionErrors}
                history={this.props.history}
                loggedIn={this.props.loggedIn}
                userId={this.props.userId}
                openModal={this.props.openModal}
                completions={this.props.completions}
                postCompletion={this.props.postCompletion}
                destroyCompletion={this.props.destroyCompletion}
                />
            )}
        </div>
      </div>
    );
  }
};

export default LessonsIndex;
