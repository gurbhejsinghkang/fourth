// var sagar = {
//     firstname: 'sagar',
//     birthyear: 1990,
//     family: ['joe', 'jack', 'abdul'],
// };
// console.log(sagar.firstname);



let lamp = {
    type: 'desk',
    brightnessofbulb: 60,
    turnedon: true,
    manufacturer: {
        name: 'Indian Electric Company',
        model: 'ACHU1223',
        location: ['USA', 'CANADA', 'INDIA']
    },
    "the one": "That one",
    turnLampOnOrOff: function () {
        console.log("This lamp will turn on or off");
    },
    lampReport: function () {
        console.log("this lamp is a " + this.type + " lamp");
    }
};
console.log(lamp['the one']);
console.log(lamp.type);
console.log(lamp.manufacturer.model);
lamp.turnLampOnOrOff;
lamp.type = "bedroom";
console.log(lamp.type);

document.write("<html>
    < head >
< !--Header content goes here-- >
</head >
    <body>
        <!-- Body content goes here -->
    <h1>This is Header</h1>
        <p>This is a paragraph 1</p>
        <p>This is a paragraph 2</p>
        <p>This is a paragraph 3</p>
        <div>
            <span>Span content here</span>
        </div>
        <!-- Footer content goes here -->
</body>
</html > ");
