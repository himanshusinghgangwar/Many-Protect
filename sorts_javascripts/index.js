function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

// let employees = [
//   {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 27,
//     joinedDate: 'December 15, 2017'
//   },

//   {
//     firstName: 'Ana',
//     lastName: 'Rosy',
//     age: 25,
//     joinedDate: 'January 15, 2019'
//   },

//   {
//     firstName: 'Zion',
//     lastName: 'Albert',
//     age: 30,
//     joinedDate: 'February 15, 2011'
//   }
// ];
// employees.sort((a, b) => a.age - b.age);

// employees.forEach((e) => {
//   document.write(`${e.firstName} ${e.lastName} ${e.age}`);
// });

// table format in table 
var array = [
  { name: 'John', age: 25, date: '2012-07-15' },
  { name: 'Peter', age: 30, date: '2008-10-02' },
  { name: 'Harry', age: 28, date: '2020-12-30' },
  { name: 'Clark', age: 35, date: '2022-01-04' },
  { name: 'Maya', age: 25, date: '2020-08-05' }
];
console.table(array);

array.forEach((e) => {
  document.write(`${e.name} ${e.age} ${e.date}`);
});

// sort object by string property
array.sort(function(a, b) {
  if(a.name < b.name) { return -1; }
  if(a.name > b.name) { return 1; }
  return 0;
});
console.log("Sort by string (name) property ----------------");
// printArray(array);
console.table(array);

// sort object by number property
array.sort(function(a, b) {
  return a.age - b.age;
});
console.log("\nSort by number (age) property ----------------");
// printArray(array);
console.table(array);

// sort object by date property
array.sort(function(a, b) {
  return new Date(a.date) - new Date(b.date);
});
console.log("\nSort by date property ----------------");
// printArray(array);
console.table(array);

// printing function
function printArray(array) {
  array.forEach(function(item) {
    // console.log(item);
    console.table(item);
  });
}