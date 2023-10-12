export class CustomError {
  constructor(public name: string, public message: string, public status: number) {}
}

export type AppErrors = {
  name: string;
  message: string;
  code?: string | number;
  meta?: { target: string; cause: string };
};
