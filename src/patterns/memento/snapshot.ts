import { Person } from '../../models/person';

export class Snapshot
{
    person: Person;
    timestamp: Date;

    constructor(person: Person)
    {
        let clone = new Person()
        clone.clone(person);

        this.person = clone;
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