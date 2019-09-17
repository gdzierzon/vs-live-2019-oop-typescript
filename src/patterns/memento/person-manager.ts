import { Person } from '../../models/person';
import { Snapshot } from './snapshot';

export class PersonManager
{
    private person: Person;

    constructor(person: Person)
    {
        this.person = person;
    }

    save():Snapshot
    {
        return new Snapshot(this.person);
    }

    restore(snapshot: Snapshot)
    {
        this.person = snapshot.Person;
    }
    

    get Person(): Person
    {
        return this.person;
    }
}