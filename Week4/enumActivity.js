var Environment;
(function (Environment) {
    Environment["loc"] = "LOCAL";
    Environment["dev"] = "DEVELOPMENT";
    Environment["stage"] = "STAGING";
    Environment["prod"] = "PRODUCTION";
})(Environment || (Environment = {}));
function runTest(env) {
    console.log(`Running Tests in ${env}`);
}
runTest(Environment.loc);
export {};
