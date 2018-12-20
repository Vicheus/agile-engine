interface IFormat {
  bold: boolean;
  italic: boolean;
  underline: boolean;
}

export class Format implements IFormat {
  constructor(
    public bold: boolean = false,
    public italic: boolean = false,
    public underline: boolean = false
  ) {
  }
}
