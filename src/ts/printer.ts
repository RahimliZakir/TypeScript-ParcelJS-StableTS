import { IPrinter } from "./iprinter.js";

export class Printer implements IPrinter {
  print(): void {
    console.log("Check printed!");
  }
}
