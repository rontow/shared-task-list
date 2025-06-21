export class TaskModel {
  name: string;
  startDate: Date;
  dueDate?: Date;
  done: boolean;

  constructor(
    name: string,
    startDate: Date,
    dueDate?: Date, 
    done: boolean = false 
  ) {
    this.name = name;
    this.startDate = startDate;
    this.dueDate = dueDate;
    this.done = done;
  }


  markAsDone(): void {
    this.done = true;
  }
}