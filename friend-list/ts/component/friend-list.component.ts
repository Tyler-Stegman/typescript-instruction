import { Friend } from "../model/friend.class";

export class FriendListComponent {

}

let f1: Friend = new Friend(1, "Chris", 33, "HugeEastSide71@aol.com", true);
let f2: Friend = new Friend(2, "Shawn", 32, "Shawn@gmail.com", true);
let f3: Friend = new Friend(3, "Kevin", 33, "Kevin@gmail.com", true);
let f4: Friend = new Friend(4, "Blair", 28, "stegman.bt@gmail.com", true);
let f5: Friend = new Friend(5, "Megan", 33, "mstegman1156@gmail.com", true);
let friends: Friend[] = [f1, f2, f3, f4, f5];
console.log("ID     Name   Age      Email               BFF");
for(let friend of friends) {
    console.log(friend.about());
}