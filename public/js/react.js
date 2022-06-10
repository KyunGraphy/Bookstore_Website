$(".count").prop("disabled", false);
$(document).on("click", ".plus", function () {
  $(".count").val(parseInt($(".count").val()) + 1);
});
$(document).on("click", ".minus", function () {
  $(".count").val(parseInt($(".count").val()) - 1);
  if ($(".count").val() == 0) {
    $(".count").val(1);
  }
});

$(document).ready(function () {
  $("#likeBtn").on("click", function (e) {
    e.preventDefault();
    // var data = $("input[name=quote]").val();
    // $.ajax({
    //   type: "post",
    //   url: "/ajax",
    //   data: data,
    //   dataType: "text",
    // }).done(function (data) {
    //   $("h1").html(data.quote);
    // });
    const reactUser = $('#reactUser').val()
    const reactSKU = $('#reactSKU').val()
    var x = document.getElementById("heart");

    // $.getJSON(`/custom/ajax`, function (data) {
    //   console.log(data);
    // })
    
    if (x.classList.contains("fa-heart-o")) {
      $.getJSON(`/custom/ajax?SKU=${reactSKU}&react=like`, function (data) {
        console.log(data);
      })

      x.classList.remove("fa-heart-o");
      x.classList.add("fa-heart");
    } else if (x.classList.contains("fa-heart")) {
      $.getJSON(`/custom/ajax?SKU=${reactSKU}&react=dislike`, function (data) {
        console.log(data);
      })

      x.classList.remove("fa-heart");
      x.classList.add("fa-heart-o");
    }
  });
});

// document.getElementById("likeBtn").addEventListener("click", myFunction);

// function myFunction() {
//   var x = document.getElementById("heart");
//   if (x.classList.contains("fa-heart-o")) {
//     x.classList.remove("fa-heart-o");
//     x.classList.add("fa-heart");
//   } else if (x.classList.contains("fa-heart")) {
//     x.classList.remove("fa-heart");
//     x.classList.add("fa-heart-o");
//   }
// }
