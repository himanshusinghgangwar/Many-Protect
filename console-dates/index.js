// function getDatesInRange(startDate, endDate) {
//             const date = new Date(startDate.getTime());

//             const dates = [];

//             while (date <= endDate) {
//                 dates.push(new Date(date));
//                 date.setDate(date.getDate() + 7);
//             }

//             return dates;
//         }
//         const d1 = new Date('2022-03-25');
//         const d2 = new Date('2022-04-25');

//         console.log(getDatesInRange(d1, d2));



// function getDatesInRange() {
//   start = document.getElementById("startDate").value;
//   end = document.getElementById("endDate").value;

//   for (let year = start; year <= end; year++) {
//     for (let month = 0; month <= 11; month++) {
//       let result = new Date(year, month, 13);
//       if (result.getDay() == 5) {
//         console.log(result);
//       }
//     }
//   }
// }

function getDatesInRange() {
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;

    for (var year = startDate; year <= endDate; year++) {
        for (var month = 0; month < 11; month++) {
            var thirteen = new Date(year, month, 13);
            if (thirteen.getDay() == 5) {
                var arr = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September',
                    'October', 'November', 'December'];
                console.log('Friday 13 is on ' + arr[month] + ' ' + year);
            }
        }
    }
}