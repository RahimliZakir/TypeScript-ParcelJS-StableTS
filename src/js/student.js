// TODO: Fixing of extension problem.
import { Person } from "./person.js";
export class Student extends Person {
    constructor(ad, soyad, yash, uni) {
        super(ad, soyad, yash);
        this.university = uni;
    }
}
const student = new Student("Ali", "Aliyev", 27, "ASOIU");
console.log(student);
