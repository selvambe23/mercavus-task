
export interface Hobbies {
  passion: string;
  name: string;
  year: string | number;
}

export interface UserHobby {
  id: string;
  name: string;
  hobbies: Array<Hobbies>;
}

export enum PostType {
  POST = 'POST',
  PUT = 'PUT'
}
