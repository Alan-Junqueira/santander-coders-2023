export type TStatus = 'todo' | 'inProgress' | 'done'

export class Task {
  constructor(
    public title: string,
    public description: string,
    public date: Date,
    public status: TStatus
  ) {}
}
