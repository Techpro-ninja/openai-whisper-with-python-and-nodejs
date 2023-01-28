const { spawn } = require("child_process");

const outdata = spawn("whisper", ["../sample.mp3"]);

outdata .stdout.on("data", data => {
    console.log(`stdout: ${data}`);
});

outdata .stderr.on("data", data => {
    console.log(`stderr: ${data}`);
});

outdata .on('error', (error) => {
    console.log(`error: ${error.message}`);
});

outdata .on("close", code => {
    console.log(`child process exited with code ${code}`);
});