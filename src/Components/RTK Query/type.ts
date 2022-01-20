export type status = "inprogress" | "passed" | "failed";

export type ITodoRTK = {
  id: string | number;
  title: string;
  content: string;
  createdDate: string;
  finishedDate: string;
  status: status;
  modifiedDate: string;
};

export type IError = {
  status: number;
  msg: string;
};
