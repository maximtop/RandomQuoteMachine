$(document).ready(function () {
    function getQuote() {
        $.ajax({
            url: "http://api.forismatic.com/api/1.0/",
            jsonp: "jsonp",
            dataType: "jsonp",
            method: "GET",
            data: {
                lang: "ru",
                method: "getQuote",
                format: "jsonp"
            }
        })
            .done(function(data) {
                $('#text ').text(data.quoteText);
                $('#author').text(data.quoteAuthor);
            })
            .error(function(err) {
                $('#text ').text(err);
            });
    }

    getQuote();

    $("#newQuote").on("click", function () {
        getQuote();
        let colors = ["rgb( 69,138,148)","rgb( 67,191,208)","rgb( 67,160,174)","rgb( 71,119,125)","rgb( 62, 93, 98)","rgb(148, 73,159)","rgb(195, 69,213)","rgb(169, 70,183)","rgb(127, 76,134)","rgb(100, 66,105)","rgb(219,236,107)","rgb(229,252, 78)","rgb(229,250, 93)","rgb(188,200,112)","rgb(148,156, 97)","rgb(242,173,110)","rgb(255,164, 79)","rgb(255,172, 95)","rgb(205,158,115)","rgb(160,128,100)"];
        function getRandomColor(listOfColors) {
            return listOfColors[Math.floor(Math.random() * listOfColors.length)];
        }
        let currentColor = $("body").css("backgroundColor");
        let randomColor = getRandomColor(colors);
        while (randomColor === currentColor) {
            randomColor = getRandomColor();
        }
        $("body, .social, .btn").css("backgroundColor", randomColor);
        $("#text, .fa-quote-left, #author").css("color", randomColor);
    });
});