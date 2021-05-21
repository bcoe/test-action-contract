const core = require('@actions/core')
console.info(process.env);
const token = core.getInput('token', { required: true });
console.info(`TOKEN type = ${typeof token}`);
