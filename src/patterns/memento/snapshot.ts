import { Person } from '../../models/person';

export class Snapshot
{
    person: Person;
    timestamp: Date;

    constructor(person: Person)
    {
        this.person = person.clone();
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