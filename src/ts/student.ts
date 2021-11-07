// TODO: Fixing of extension problem.
import { Person } from "./person.js";

class Student extends Person {
  university: string;

  constructor(ad: string, soyad: string, yash: number, uni: string) {
    super(ad, soyad, yash);
    this.university = uni;
  }
}

const student: Student = new Student("Ali", "Aliyev", 27, "ASOIU");
console.log(student);
