// The entry file of your WebAssembly module.

export function myExportedFunctionThatTakesAString(value: string): string {
  return "AsBind: " + value;
}

export class Test {
  input: string;

  constructor(input: string) {
    this.input = input;
  }

  getInputLength(): i32 {
    return this.input.length;
  }
}
