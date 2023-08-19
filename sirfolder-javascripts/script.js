function addProduct() {
  let pname = document.getElementById("pname").value;
  if(pname == ""){
    document.getElementById("pname").innerHTML="please enter your productId"
}
  let pid = document.getElementById("pid").value;
  let price = document.getElementById("price").value;
  console.log(pname);
  let str =
    "<tr><td>" + pid + "</td><td>" + pname + "</td><td>" + price + "</td></tr>";
  let x = document.getElementById("data").innerHTML;
  x = x + str;
  document.getElementById("data").innerHTML = x;
}
