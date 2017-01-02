function CourseTracker(fbname) {
    fbname = 'course-tracker-46e40';
    var firebase = new Firebase("https://" + fbname + ".firebaseio.com/");
        this.firebase = firebase;
};

$(document).ready(function() {
  var oct = new CourseTracker('course-tracker-46e40');
});    