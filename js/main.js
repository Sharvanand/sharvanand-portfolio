$(document).ready(function() {
  $(".nav-toggle").hide();
  $(".menu").click(function() {
    $(".nav-toggle").toggle();
  });

  $(function() {
    count = 0;
    wordsArray = [
      "FullStack Developer",
      "UI Developer",
      "Frontend Engineer",
      "React Developer"
    ];
    setInterval(function() {
      count++;
      $("#changeme").fadeOut(400, function() {
        $(this)
          .text(wordsArray[count % wordsArray.length])
          .fadeIn(400);
      });
    }, 2000);
  });
});
