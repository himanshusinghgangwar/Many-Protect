var count = 0;
$(document).ready(function () {
    $('td').on('click', function () {
        var tableId = {
            1: ["1", "2", "4"],
            2: ["1", "2", "3", "5"],
            3: ["2", "3", "6"],
            4: ["1", "4", "5", "7"],
            5: ["2", "4", "5", "6", "8"],
            6: ["3", "5", "6", "9"],
            7: ["4", "7", "8"],
            8: ["5", "7", "8", "9"],
            9: ["6", "8", "9"],
        };
        console.log($(this).css("background-color"));

        var clickToggle = tableId[this.id];
        clickToggle.forEach(function (id) {
            var $element = $("#" + id);
            var currentColor = $element.css("background-color");
            var newColor = currentColor === "rgb(0, 0, 0)" ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0)";
            $element.css("background-color", newColor);
        });
        ++count;
        $("#count").text("counter : " + count);
        console.log(count);
        
        var allColorsSame = true;
        var firstColor = $("#" + clickToggle[0]).css("background-color");
        for (let index = 1; index <= 9; index++) {
            console.log($("#" + index).css("background-color"));
            if ($("#" + index).css("background-color") !== firstColor) {
                allColorsSame = false;
            }
        }
        if (allColorsSame) {
            alert("you won in " + count + "moves");
        }
    });

});