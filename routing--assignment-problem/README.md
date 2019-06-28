Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)
Add a simple navigation with two links => One leading to "Users", one leading to "Courses"
Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)
Pass the course ID to the "Course" page and output it there
Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)
Load the "Course" component as a nested component of "Courses"
Add a 404 error page and render it for any unknown routes
Redirect requests to /all-courses to /courses (=> Your "Courses" page)