export interface Task {  
  id: number;
  text: string;
  dateNTime: string;
  reminder: boolean;
}

export interface Actions {
deleteTask(id:number): void
toggleReminder(id:number): void
}