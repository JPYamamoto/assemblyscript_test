const { AsBind } = require("as-bind");
const fs = require("fs");

const wasm = fs.readFileSync(__dirname + "/build/optimized.wasm");

// This works fine.
(async () => {
  const asBindInstance = await AsBind.instantiate(wasm);
  const response = asBindInstance.exports.myExportedFunctionThatTakesAString(
    "Hello World!"
  );
  console.log(response);
})();

// This gives an error.
(async () => {
  const asBindInstance = await AsBind.instantiate(wasm);

  ({ Test } = asBindInstance.exports);

  let program = new Test("Hello World");
  const length = program.getInputLength();

  console.log(length);
})();
