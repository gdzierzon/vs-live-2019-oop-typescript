import { HistoryController } from './patterns/memento/history-controller';
import { PersonManager } from './patterns/memento/person-manager';
import { Person } from "./models/person";

let person = new Person();
person.Name = 'G';
person.Surname = 'Dzierzon';

let manager = new PersonManager(person);
let history = new HistoryController(manager);

history.backup();
console.log(manager.Person.Name)
person.Name = "Gr";
history.backup();
console.log(manager.Person.Name)
person.Name = "Gre";
history.backup();
console.log(manager.Person.Name)
person.Name = "Greg";
history.backup();
console.log(manager.Person.Name)
person.Name = "Grego";
history.backup();
console.log(manager.Person.Name)
person.Name = "Gregor";
history.backup();
console.log(manager.Person.Name)


history.undo();
console.log(manager.Person.Name)
history.undo();
console.log(manager.Person.Name)
history.undo();
console.log(manager.Person.Name)
history.undo();
console.log(manager.Person.Name)
history.undo();
console.log(manager.Person.Name)
history.undo();
console.log(manager.Person.Name)