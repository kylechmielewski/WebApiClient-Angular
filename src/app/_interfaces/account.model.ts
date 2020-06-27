export interface Account {
  id: string;
  dateCreated: Date;
  accountType: string;
  ownerId?: string; //? marks property as optional
}
