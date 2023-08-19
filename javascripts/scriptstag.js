//setting default attribute to disabled
document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

//taking value to increment decrement input value
var valueCount;

//taking price value in variable
var price = document.getElementById("price").innerText;

//price calculation function
function priceTotal() {
    var total = valueCount * price;
    // document.getElementById("price").innerText = total
    document.getElementById().innerText = total
}

//plus button
document.querySelector(".plus-btn").addEventListener("click", function() {
    //getting value of input
    valueCount = document.getElementById("quantity").value;
    //input value increment by 1
    valueCount++;
    //setting increment input value
    document.getElementById("quantity").value = valueCount;

    //input value is > 1 using removeattribute and removeclass method
    if (valueCount > 1) {
        document.querySelector(".minus-btn").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled")
    }

    //Calling price Function
    priceTotal()
})

//same process for minus button
document.querySelector(".minus-btn").addEventListener("click", function() {
    valueCount = document.getElementById("quantity").value;
    //input value decrement by 1
    valueCount--;
    document.getElementById("quantity").value = valueCount;
    console.log(valueCount);
    if (valueCount == 1) {
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled")

    }
    priceTotal()
})