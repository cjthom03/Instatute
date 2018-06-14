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


## Project Design
Instatute is intended to be simple, clean, and easy to navigate - allowing the user to spend more time focusing on their learning goals. Given the two-week timeframe, it was decided to focus on a core set of features that would result in a minimum viable product for a learning application that runs smoothly and bug-free. A manageable codebase was prioritized over trying to clone every major feature of the target application (Udemy).

### Design Documents
Application features and layout design documents are available in the project [wiki](https://github.com/cjthom03/UdemyClone/wiki), and each feature was tracked on the project [issues page](https://github.com/cjthom03/UdemyClone/issues). The following design documents are available:
+ [MVP List](mvp-list)
+ [Database Schema](schema-information)
+ [Routes](routes)
+ [Sample State](sample-state)
+ [Component Hierarchy with Wireframes](component-hierarchy-with-wireframes)


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
