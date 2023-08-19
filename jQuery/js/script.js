// paragraph alert message
$(document).ready(function () {
    $("#clickme_task").click(function () {
        alert("clicked me");
    });
});
// input box validation
$(document).ready(function () {
    $('#validate_name').click(function () {
        if ($('#fname').val().length === 0) {
            $('#fname').css('background-color', '#FF0000');
        } else if ($('#lname').val().length === 0) {
            $('#lname').css('background-color', '#FF0000');
        }
    })
});
// password match validated
$(document).ready(function () {
    $("#cpass").on('keyup', function () {
        var password = $("#pass").val();
        var confirmPassword = $("#cpass").val();
        if (password != confirmPassword)
            $("#CheckPasswordMatch").html("Password does not match !").css("color", "red");
        else
            $("#CheckPasswordMatch").html("Password match !").css("color", "green");
    });
});
//  details 10 and 12 information
$(document).ready(function () {
    var max_fields = 10000; //maximum input boxes allowed
    var wrapper = $("#sdetails"); //Fields wrapper
    var add_button = $("#add_details"); //Add button ID

    var x = 1; //initlal text box count
    $(add_button).click(function (e) { //on add input button click
        e.preventDefault();
        if (x < max_fields) { //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div><input type="text" placeholder="Enter Class" name="mytext[]"/><input type="text" placeholder="Enter Board" name="mytext[]"/><input type="number" placeholder="Enter Marks" name="mytext[]"/><input type="text" placeholder="Enter Division" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
        }
    });

    $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});
// odd and even table to use jquery
$("#tr_even").on("click", function () {
    $("#task_2 tr:even").css("background-color", "LightGrey");
});
$("#tr_odd").on("click", function () {
    $("#task_2 tr:odd").css("background-color", "DodgerBlue");
});
// Create two buttons previous and next On click images should be changed to previous one or next one accordingly. 
$(function () {
    $("#images img:gt(0)").hide();
    $("#next_img").click(function () {
        $("#images img:first").fadeOut().next().fadeIn().end().appendTo("#images");
    });
    $("#previos_img").click(function () {
        $("#images img:last").prependTo("#images").fadeIn().next().fadeOut();
    });
});
// Create an array consisting names of some flowers. Add a textbox to suggest the flower names on every character
// htm tags use 
$(document).ready(function () {
    $(".add_cat").click(function () {
        $("li").append('<li>category</li>');
        $(".add_sub_cat").click(function () {
            $("#inner_ul_clothes").append('<li>Sub category</li>');
        });
    });
    // sub-category
    if ($(".add_sub_cat").click(function () {
        $("#inner_ul_clothes").append('<li>Sub category</li>');
    }))
        if ($(".add_sub_cat").click(function () {
            $("#inner_ul_elec").append('<li>Sub category</li>');
        }));
});
$(document).ready(function () {
    $(".add_cat").click(function () {
        $("#inner_ul_clothes").append('<li>New list colthes</li>');
        $("#inner_ul_elec").append('<li>New list eletricity</li>');
    });
});