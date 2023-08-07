https://www.tutorialsteacher.com/typescript/data-modifiers


//In object-oriented programming, the concept of 'Encapsulation' is used to make class members
//public or private i.e. a class can control the visibility of its data members. This is done using access modifiers.

class Employee {
  public empName: string;
  empCode: number; // by default public
}
// we can able to access class members outside if it is public
let emp = new Employee();
emp.empName = "sethu";
emp.empCode = 20302;

// =====================================================
// The private access modifier ensures that class members are visible only to that class and are not accessible outside the containing class.
class Employee {
  private empCode: number;
  empName: string;
}

let emp = new Employee();
emp.empCode = 123; // Compiler Error
emp.empName = "Swati"; //OK

//========================================================

// The protected access modifier is similar to the private access modifier, except that protected members
// can be accessed using their deriving classes.

class Student {
  public studCode: number;
  protected studName: string;
  constructor(code: number, name: string) {
    this.studCode = code;
    this.studName = name;
  }
}
class Person extends Student {
  private department: string;

  constructor(code: number, name: string, department: string) {
    super(code, name);
    this.department = department;
  }
  public getElevatorPitch() {
    return `My unique code: ${this.studCode}, my name: ${this.studName} and I am in ${this.department} Branch.`;
  }
}
let joeRoot: Person = new Person(1, "JoeRoot", "CS");
console.log(joeRoot.getElevatorPitch()); // `My unique code: 1, my name: JoeRoot and I am in CS Branch.
//we can't use the name from outside of Student class. We can still use it from within an instance method of Person class because
// Person class derives from Student class.
//If we try to access the protected member from outside the class, as emp.empCode, we get the following compilation error:

//error TS2445: Property 'empCode' is protected and only accessible within class 'Employee' and its subclasses.
