import Dexie, { Table } from 'dexie';
import { IStorage } from '../../Extension/Content';

export class DexieLib extends Dexie {
  Images !: Table<IStorage>

  constructor() {
    super('Image_Tracker_DB')
    this.version(1).stores({
      Images : 'id, alt, extension, size, origin'
    })
  }
}

export const db = new DexieLib()