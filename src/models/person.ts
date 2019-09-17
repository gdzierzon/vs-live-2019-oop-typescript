export class Person
{
    private name?: string;
    private surname?: string;
    private birthdate?: string;

    constructor()
    {

    }

    clone(person: Person)
    {
        this.Name = person.Name;
        this.Surname = person.Surname;
        this.Birthdate = person.Birthdate;
    }

    get Name(): string
    {
        return this.name;
    }
    set Name(value: string)
    {
        this.name = value;
    }
    
    get Surname(): string
    {
        return this.surname;
    }
    set Surname(value: string)
    {
        this.surname = value;
    }

    get Birthdate(): string
    {
        return this.birthdate;
    }
    set Birthdate(value: string)
    {
        this.birthdate = value;
    }

}
