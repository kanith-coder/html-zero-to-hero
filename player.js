const data = [
    { name: "John", xp: 47, health: 46, gold: 100 },
    { name: "Bob", xp: 23, health: 24, gold: 50 },
    { name: "Nick", xp: 40, health: 35, gold: 75 },
    { name: "Alex", xp: 44, health: 45, gold: 80 }
];

// Array
let array = [2, 'hello', true, { age: 25 }, [1, 2, 3, 4, 5]];

// Object
const kanith = {
    weigth: 60,
    height: 170,
    name: 'kanith',
    address: {
        city: 'bangkok',
        country: 'thailand'
    }
};

function addPlayer(newPlayer) {
    const tbody = document.querySelector("#player tbody");
    newPlayer.forEach(function (item) {
        // <tr></tr>
        var row = document.createElement('tr');
        // { name: "John", xp: 47, health: 46, gold: 100 }
        Object.values(item).forEach(function (key, value) {
            // <td>John</td>
            var td = document.createElement('td');
            td.textContent = value;
            // <tr>
            // <td>John</td>
            // <td>47</td>
            // <td>46</td>
            // <td>100</td>
            // </tr>
            row.appendChild(td);
        });
        // <tbody>
        // <tr>
        // <td>John</td>
        // <td>47</td>
        // <td>46</td>
        // <td>100</td>
        // </tr>
        // </tbody>
        tbody.appendChild(row);
    });
}