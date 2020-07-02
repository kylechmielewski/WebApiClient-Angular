import { Report } from './report.model';

export interface Owner {
  ownerId: string;
  name: string;
  dateOfBirth: Date;
  address: string;

  reports?: Report[]; //? marks propery as optional.
}
