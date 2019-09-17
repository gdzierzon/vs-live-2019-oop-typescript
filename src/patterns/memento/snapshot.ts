import { Person } from '../../models/person';
export class Snapshot
{
    person: Person;
    timestamp: Date;

    constructor(person: Person)
    {
        let newPerson = new Person();
        newPerson.Name = person.Name;
        newPerson.Surname = person.Surname;
        newPerson.Birthdate = person.Birthdate;

        this.person = newPerson;
        this.timestamp = new Date();
    }

    get Person(): Person
    {
        return this.person;
    }

    get Timestamp(): Date
    {
        return this.timestamp;
    }
}