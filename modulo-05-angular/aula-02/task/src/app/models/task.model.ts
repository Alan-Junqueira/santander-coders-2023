export type TStatus = 'todo' | 'inProgress' | 'done';

export interface IClass {
  title: string;
  description: string;
  date: Date;
  status: TStatus;
  tags: string[];
}

export class Task {
  constructor(
    public title: string,
    public description: string,
    public date: Date,
    public status: TStatus,
    public tags: string[]
  ) {}
}
