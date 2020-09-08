$(".menu").on("click", (event) => {
    $("nav ul").slideToggle();
});

// update button

$("button.update").on("click", () => {
    console.log("hiiiiiiii");
    $(".update-book").toggleClass("d-none");
});
