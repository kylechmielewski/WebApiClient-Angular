export interface Report {
  reportId: string;
  dateCreated: Date;
  reportType: string;
  ownerId?: string; //? marks property as optional
}
