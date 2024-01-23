const data = [
    { name : "Polly", xp: 47, health: 46, gold: 100 },
    { name : "Ninja", xp: 50, health: 30, gold: 90 },
    { name : "Wooddy", xp: 40, health: 46, gold: 70 },
    { name : "Judee", xp: 30, health: 30, gold: 70 },
]

function addPlayer(newPlayer) {
    const tbody = documet.querySelector("#player tbody");
    newPlayer.forEach(function(item) {
        let row = document.createElement("tr");
        Object.values(item).forEach(function(values) {
            let td = document.createElement("td");
            td.textContent = values;
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
}