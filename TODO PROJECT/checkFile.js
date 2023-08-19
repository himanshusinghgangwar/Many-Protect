let data = [];
let dataToUpdate;
function add() {
  var val = { input: document.getElementById("Add-task").value, checked: 0 };
  data.push(val);
  display();
}
function display() {
  var strIncomomplete = "";
  var strComplete = "";
  data.forEach((element) => {
    if (element["checked"] == 0) {
      strIncomomplete +=
        "<li><input type='checkbox' value=" +
        element.input +
        " onclick='check(this)'/>" +
        element.input +
        "<button value=" +
        element.input +
        " onclick='edit(this)'>edit</button><button value=" +
        element.input +
        " onclick='del(this)'>delete</button></li>";
    } else {
      strComplete +=
      "<li><input type='checkbox' value=" +
      element.input +
      " onclick='check(this)'/>" +
      element.input +
      "<button value=" +
      element.input +
      " onclick='edit(this)'>edit</button><button value=" +
      element.input +
      " onclick='del(this)'>delete</button></li>";
    }
    console.log(element);
    document.getElementById("incomplete-tasks").innerHTML = strIncomomplete;
    document.getElementById("completed-tasks").innerHTML = strComplete;
  });
}
function check(params) {
  console.log(params.value);
  data.forEach((element) => {
    if (params.value == element.input) {
      if (element.checked == 0) {
        element.checked = 1;
      } else {
        element.checked = 0;
      }
    }
  });
  display();
}
function edit(params) {
  dataToUpdate = params.value;
  console.log(params.value);
  document.getElementById("Add-task").value = params.value;
  document.getElementById("addbutton").style.display = "none";
  document.getElementById("updatebutton").style.display = "inline";
}
function update(params) {
  let x = document.getElementById("Add-task").value;
  data.forEach((element) => {
    if (dataToUpdate == element.input) {
      element.input = x;
    }
  });
  document.getElementById("Add-task").style.display = "inline";
  document.getElementById("updatebutton").style.display = "none";
  display();
}
function del(params) {
  console.log(params.value);
  data.forEach((element, index) => {
    if (params.value == element.input) {
      data.splice(index, 1);
    }
  });
  display();
}