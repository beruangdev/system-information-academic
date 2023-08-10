import concurrently from "concurrently";
import { resolve } from "path";
import { exec, spawn } from "child_process";

// exec("ls ./", (error, stdout, stderr) => {
//   if (error) {
//       console.log(`error: ${error.message}`);
//       return;
//   }
//   if (stderr) {
//       console.log(`stderr: ${stderr}`);
//       return;
//   }
//   console.log(`stdout: ${stdout}`);
// });

// const lsChildProcess = spawn("ls");
// lsChildProcess.on("exit", () => console.log("the ls command finished"));

const { result } = concurrently(
    [
        {
            command: `git add . && git commit -m="build ${Date.now()}" && git push`,
            name: "script",
            env: { APP_ENV: "production" },
        },
    ],
    {
        // prefix: "push",
        restartTries: 1,
        // cwd: resolve(),
    },
);

function success() {
    console.log("success");
}
function failure() {
    console.log("failure");
}
result.then(success, failure);
