const data = [
    { name: "John", xp: 47, health: 46, gold: 100 },
    { name: "Bob", xp: 23, health: 24, gold: 50 },
    { name: "Nick", xp: 40, health: 35, gold: 75 },
    { name: "Alex", xp: 44, health: 45, gold: 80 }
];

function addPlayer(newPlayer) {
    const tbody = document.querySelector("#player tbody");
    newPlayer.forEach(function(item) {
        var row = document.createElement('tr');
        Object.values(item).forEach(function(value) {
            var td = document.createElement('td');
            td.textContent = value;
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
}