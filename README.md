# Instatute

[Live Demo](https://udemy-clone.herokuapp.com/)

Instatute is an online learning market where users can subscribe to courses (for free) and view video lessons. Instatute's design is intended to clone Udemy's basic design and layout, while the content comes directly from Khan Academy's YouTube videos.

Instatute makes use of a Rails/PostgreSQL backend with a React.js and Redux frontend.

This project was designed and built under a two-week deadline, although enhancements will be added over time.

This README covers the following:
* [Feature](https://github.com/cjthom03/UdemyClone#features)
* [Project Design](https://github.com/cjthom03/UdemyClone#project-design)
* [Technologies](https://github.com/cjthom03/UdemyClone#technologies)
* [Possible Future Features](https://github.com/cjthom03/UdemyClone#possible-future-features)


## Features

* Secure frontend and backend user authentication using BCrypt
* Users can search for courses and otherwise explore the site before logging in
* Once logged in, users can subscribe to courses and then view lesson videos
* A 'My Courses' page provides direct access to subscribed courses
* Lesson completion is registered at the end of each video, and tracked on the course page
* Users have the option of manually marking lessons complete or incomplete

### Signup & Login Modals
Users are encouraged to explore the site and the courses, and should only being required to login when they want to access the lesson videos. To accomplish this, a login modal is displayed in order to avoid redirecting the user to a different login page, and in such a way as to let the user know that any further interaction with the site requires user authentication.

This was accomplished by maintaining a `ui.modal` slice of state that, when set to `true` by dispatching an `openModal(modal)` action, would render the login or signup form on the current page. Below is an example of this implementation when a user clicks on a lesson.

```javascript
    // When a user clicks on a lesson, check if they are logged in
    // If not, open the login modal
    handleClick(e) {
      let lesson = this.props.lesson;
      if(!this.props.loggedIn) {
        this.props.openModal("login");
      }
      else if(this.props.subscribed) {
        this.props.history.push(`/courses/${lesson.course_id}/lessons/${lesson.id}`);
      }
      else {
       this.props.receiveSubcriptionErrors(["Please subscribe to view lessons"]);
      }
    }
```

### Search
Users can search for courses, getting a preview of course titles that match their search in a dropdown menu under the search bar. The dropdown menu is accessible via the up/down arrows keys as well as the mouse.

Search was implemented by taking advantage of PostgreSQL's full text search capabilities through the [pg_search gem](https://github.com/Casecommons/pg_search).

### Subscriptions & My Courses
Users can view course pages at anytime, but must be logged in and must subscribe to a course in order to view the learning content. Subscribed users can interact freely with a course (and in the future will be able to rate the course and leave comments on the course).

Once subscribed, the `Subscribe` button will change to, once clicked, load the next incomplete lesson in the list.

Users can quickly and easily see all courses to which they are subscribed by accessing their 'My Courses' page. In order to keep code DRY, the same component to display courses on the home page was reused to build the My Courses page. This allows for consistent views for the user, easier debugging for the developer, while maintaining the flexibility to filter this component in anyway necessary.

```javascript
      //From the CourseIndex component
      //Which is used on the homepage as well as the my courses page
      banners() {
        if(this.props.match.path === "/my-courses") {
          return (<MyCoursesBanner />);
        }
        return(
          <div>
            <MainBanner />
            <AboutInstatuteBanner />
          </div>
        );
      }

      render () {
        let courseIndex;
        if(this.props.loading) {
          courseIndex = (
            <div>
              <div className="loader">Loading...</div>
            </div>
          );
        } else {
          courseIndex = (
            <div className="course-index">
              {this.props.courses.map( course =>
                <CourseIndexItem key={course.id} course={course}/>
              )}
            </div>
          );
        }

        return(
          <main>
            {this.banners()}
            <div className="course-index-header">{this.props.header}</div>
            {courseIndex}
          </main>
        );
      }
    }
```

### Lesson Videos & Lesson Completion
The learning content is the core of the site and the whole purpose of the application. Selecting a lesson brings a user to the lesson video, which is loads free content provide by Khan Academy by accessing YouTube's API (in a similar fashion to most of Khan Academy's actual content).

While viewing a lesson, users can easily navigate between lessons within the same course using the `<< Previous` and `Next >>` buttons, or through the sidebar. In order to keep the code DRY, the same component was used to render the lessons list on the Course page and in the active lesson sidebar, with responsive design.

Users can register lesson completion in two ways. Automatically, by watching a video to the very end.

Or, by manually toggling the completion check-mark on each lesson. Lesson progress is tracked on the course page, which updates automatically.

## Project Design
Instatute is intended to be simple, clean, and easy to navigate - allowing the user to spend more time focusing on their learning goals. Given the two-week timeframe, it was decided to focus on a core set of features that would result in a minimum viable product for a learning application that runs smoothly and bug-free. A manageable codebase was prioritized over trying to clone every major feature of the target application (Udemy).

### Design Documents
Application features and layout design documents are available in the project [wiki](https://github.com/cjthom03/UdemyClone/wiki), and each feature was tracked on the project [issues page](https://github.com/cjthom03/UdemyClone/issues). The following design documents are available:
+ [MVP List](https://github.com/cjthom03/UdemyClone/wiki/MVP-List)
+ [Database Schema](https://github.com/cjthom03/UdemyClone/wiki/Schema-Information)
+ [Routes](https://github.com/cjthom03/UdemyClone/wiki/Routes)
+ [Sample State](https://github.com/cjthom03/UdemyClone/wiki/Sample-State)
+ [Component Hierarchy with Wireframes](https://github.com/cjthom03/UdemyClone/wiki/Component-Hierarchy-with-Wireframes)


## Technologies
Instatute is a project intended as a smaller-scale portfolio piece that needed to be built in a relatively short timeframe. For these reasons, technologies that provided convenience and speed were chosen over those those that provide for scalability.

Rails was choose due its RESTful architecture and out-of-the-box support for relational databases. Heroku was deemed adequate for the predicted load.

Frontend Redux states were set up with separate reducers and actions for users, courses, lessons, ratings, subscriptions, completions, and errors. This keeps the data in the state normalized and eases the task of keeping the frontend up-to-date with changes in the database.

In addition to the included packages and gems, [AWS S3](https://aws.amazon.com/s3/) was used for image hosting.

## Possible Future Features
* Allow users to rate courses (1-5 stars)
* Allow users to comment on courses
* Categorize course content and allow filtering by course type
* Mobile responsive design
* Improve search algorithm and rankings
