export class Person
{
    private name?: string;
    private surname?: string;
    private birthdate?: string;

    constructor()
    {

    }

    clone(): Person
    {
        let clone = new Person();
        clone.Name = this.Name;
        clone.Surname = this.Surname;
        clone.Birthdate = this.Birthdate;

        return clone;
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
