export interface Joke {
   id: number;
   joke: string;
  catergories: Array<string>;
}

export interface JokeResponse {
  type: string;
  value: Array<Joke>;
}
