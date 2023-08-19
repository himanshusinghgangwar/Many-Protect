let data_obj = {
    productId: "",
    productName: "",
    productPrice: ""
}
function AddRow() {
    var productId = document.getElementById("productId").value;
    var productName = document.getElementById("productName").value;
    var productPrice = document.getElementById("productPrice").value;

    data_obj.productId = productId;
    data_obj.productName = productName;
    data_obj.productPrice = productPrice;

    // document.getElementById("content").innerHTML = "The value of product id is - " 
    // + data_obj.productId + " <br> The value of the product name is - " + data_obj.productName +
    // " <br> The value of the product price is - " + data_obj.productPrice;
    // console.log(productId);

    let str = "<tr><td>" + productId + "</td><td>" + productName + "</td><td>" + productPrice + "</td></tr>";
    let x = document.getElementById("tbody").innerHTML;
    x = x + str;
    // document.getElementById("tbody").innerHTML = x;
    if (productId == "" || productName == "" || productPrice == "") {
        if (productId == "") {
            return alert("enter the productID");
        }
        if (productName == "") {
            return alert("enter the productName");
        }
        if (productPrice == "") {
            return alert("enter the productPrice");
        }
    } else {
        document.getElementById("tbody").innerHTML = x;
    }
}