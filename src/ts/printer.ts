import { IPrinter } from "./iprinter.js";

class Printer implements IPrinter {
  print(): void {
    console.log("Check printed!");
  }
}
