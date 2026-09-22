import { log } from "node:console";

enum Environment {
    loc="LOCAL",
    dev="DEVELOPMENT",
    stage="STAGING",
    prod="PRODUCTION"
}

function runTest(env:Environment):void {
    console.log(`Test is running in ${env} environment`);
}

runTest(Environment.loc)
runTest(Environment.dev)
runTest(Environment.stage)
runTest(Environment.prod)