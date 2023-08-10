import concurrently from "concurrently";

const { result } = concurrently(
    [
        {
            command: `pnpm build && git add . && git commit -m="build ${Date.now()}" && git push`,
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
