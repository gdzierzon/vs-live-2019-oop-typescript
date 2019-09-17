import { PersonManager } from './person-manager';
import { Snapshot } from './snapshot';
export class HistoryController
{
    controller: PersonManager;
    snapshots: Snapshot[] = [];

    constructor(controller: PersonManager)
    {
        this.controller = controller;
    }

    get CanUndo(): boolean
    {
        return this.snapshots.length > 0;
    }

    backup(): void
    {
        this.snapshots.push(this.controller.save());
    }

    undo(): void
    {
        if(this.CanUndo)
        {
            let snapshot = this.snapshots.pop();
            this.controller.restore(snapshot);
        }
    }
}