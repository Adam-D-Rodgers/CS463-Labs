$(document).ready(() => {
  $("#copy").on("click", () => {
    $("#output1").text($("#userInput1").val());
  });
});

$(document).ready(() => {
  $("#userInput2").on("input", () => {
    $("#output2").text($("#userInput2").val());
  });
});
