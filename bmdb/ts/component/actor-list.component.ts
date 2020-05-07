import { Actor } from "../model/actor.class";
import { ActorService } from "../service/actor.service";

export class ActorListComponent {

}

let readline = require('readline-sync');
let actorSvc: ActorService = new ActorService();
let a1: Actor = new Actor();
a1.id = 1;
a1.firstName = "Mark";
a1.lastName = "Hamill";
a1.gender = "Male";
a1.birthDate = "09/25/1951";
let a2: Actor = new Actor();
a2.id = 2;
a2.firstName = "Jeff";
a2.lastName = "Bridges";
a2.gender = "Male";
a2.birthDate = "12/04/1949";
actorSvc.add(a1);
actorSvc.add(a2);

console.log("Actor List");
console.log("-----------------");

let command: string = "";
while (command != "exit") {
    console.log("COMMAND MENU");
    console.log("--------------");
    console.log("list - list all actors");
    console.log("get - get an actor");
    console.log("add - add an actor");
    console.log("del - delete an actor");
    console.log("exit - exit the application\n");
    command = readline.question("Command? ");

    switch (command) {
        case "list":
            console.log("Actor List:");
            console.log("------------------------------------");
            actorSvc.list().forEach(actor => {
                console.log(actor.about());
            });
            break;
        case "get":
            console.log("Get an Actor by ID:");
            console.log("------------------------------------");
            let id: number = readline.questionInt("Actor ID?");
            let actor: Actor = actorSvc.get(id);
                console.log(actor.about());
                break;
        case "add":
            console.log("Add an Actor:");
            console.log("------------------------------------");
            id = readline.questionInt("ID?");
            let firstName: string = readline.question("First Name?");
            let lastName: string = readline.question("Last Name?");
            let gender: string = readline.question("Gender?");
            let birthDate: string = readline.question("Birth Date (MM/DD/YYYY)?")
            actor = new Actor(id, firstName, lastName, gender, birthDate);
            actorSvc.add(actor);
            break;
        case "del":
            console.log("Delete an Actor by ID:");
            console.log("------------------------------------");
            id = readline.questionInt("Actor ID?");
            actorSvc.remove(id);
            console.log("Actor deleted");
            break;
        case "exit":
            break;
        default:
            console.log("Invalid command.  Try again.");
            break;
    }
}
