//<script src="./script.js"></script>

//console.log("Hello World");

let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

//DOM represents the HTML

const button1  = document.querySelector("#button1")
const button2  = document.querySelector("#button2")
const button3  = document.querySelector("#button3")
const text  = document.querySelector("#text")
const xpText  = document.querySelector("#xpText")
const healthText  = document.querySelector("#healthText")
const goldText  = document.querySelector("#goldText")
const monsterStats  = document.querySelector("#monsterStats")
const monsterName  = document.querySelector("#monsterName")
const monsterHealthText  = document.querySelector("##monsterHealth")

// function goStore () {
//         // console.log("Going to store.");
//         button1.innerText = "Buy 10 health (10 gold)";
// }

// function goCave  () {
//         console.log("Going to cave.");
// }

// function fightDragon   () {
//         console.log("Fighting dragon.");
// }

//initialize buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

        // function goStore() {
        //         button1.innerText = "Buy 10 health (10 gold)";
        //         button2.innerText = "Buy weapon (30 gold)";
        //         button3.innerText = "Go to town square";
        //         }

        // function goStore() {
        //         button1.onclick  = buyHealth;
        //         button2.onclick  = buyWeapon;
        //         button3.onclick  = goTown;
        //         }

        function goTown() {
                button1.innerText = "Go to store";
                button2.innerText = "Go to cave";
                button3.innerText = "Fight dragon";
                button1.onclick = goStore;
                button2.onclick = goCave;
                button3.onclick = fightDragon;
                text.innerText = "You are in the town square. You see a sign that says \"Store\".";
              }
                // การใส่ "" ในข้อความ โดยใช้ \"ข้อความ\"

                function goStore() {
                button1.innerText = "Buy 10 health (10 gold)";
                button2.innerText = "Buy weapon (30 gold)";
                button3.innerText = "Go to town square";
                button1.onclick = buyHealth;
                button2.onclick = buyWeapon;
                button3.onclick = goTown;
                text.innerText = "You enter the store.";

        function buyHealth () {

                }
        function buyWeapon () {

                }
