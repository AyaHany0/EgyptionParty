// Navigation Bar
let boxWidth = $("#sideNav").outerWidth(true);

$("#closeBtn").on("click", () => {
  $("#sideNav").addClass("hidden");
  $("#content").css("margin-left", "0px");
});

$("#openNav").on("click", () => {
  $("#sideNav").removeClass("hidden");
  $("#content").css("margin-left", `${boxWidth}px`);
});
//------------------------------------

$(".title").click(function () {
  let content = $(this).next(".inner");
  $(".inner").not(content).slideUp();
  content.stop(true, true).slideToggle();
});
//--------------------------------
function countDown(countedDate) {
  let futureDate = new Date(countedDate);
  futureDate = futureDate.getTime() / 1000;
  let now = new Date();
  now = now.getTime() / 1000;
  timeDifference = futureDate - now;
  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let minutes = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let seconds = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - minutes * 60
  );

  $("#days").html(`${days} D`);
  $("#hours").html(`${hours} H`);
  $("#minutes").html(`${minutes} M`);
  $("#seconds").html(`${seconds} S`);
  setInterval(function () {
    countDown(countedDate);
  }, 1000);
}
window.onload = function () {
  countDown("20 june 2024 9:55:02");
};
//--------------------------------------
let maxLength = 100;
$("textarea").keyup(function () {
  let length = $(this).val().length;
  let amountLeft = maxLength - length;
  if (amountLeft <= 0) {
    $("#charsLeft").text("Your available character finished!");
    $("#charsLeft").addClass("text-[#D62E33] font-bold");
  } else {
    $("#chars").text(amountLeft);
  }
});
