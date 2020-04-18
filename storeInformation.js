var person = {}

person.name = prompt("What is your name")
person.email = prompt("What is your email")
person.information = prompt("What is your information")

Object.keys(person)
    .forEach(function (key) {
        log(key + ": " + person[key], "blue")
    })

