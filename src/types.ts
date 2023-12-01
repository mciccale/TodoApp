export interface Todo {
  title: string;
  dueDate: string;
  done: boolean;
}

export interface TodoWithId extends Todo {
  id: string;
}
