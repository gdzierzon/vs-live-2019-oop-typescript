import { PersonManager } from './person-manager';
import { Snapshot } from './snapshot';

export class HistoryController
{
    manager: PersonManager;
    snapshots: Snapshot[] = [];

    constructor(manager: PersonManager)
    {
        this.manager = manager;
    }

    backup(): void {
        this.snapshots.push(this.manager.save());
    }

    undo(): void {
        if(this.CanUndo) {
            let snapshot = this.snapshots.pop();
            this.manager.restore(snapshot);
        }
    }

    get CanUndo(): boolean
    {
        return this.snapshots.length > 0;
    }
}