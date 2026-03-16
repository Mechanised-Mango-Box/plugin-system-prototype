const { spawn } = require('child_process');

const SpawnPlugin = (path, clientPort) => {
    // Start a Python program
    const python = spawn('python3', [path, clientPort], { shell: false }); // or 'python' depending on your system

    // Handle output from Python
    python.stdout.on('data', (data) => {
        console.log(`[${path}] ${data}`);
    });

    // Handle errors
    python.stderr.on('data', (data) => {
        console.error(`Python error: ${data}`);
    });

    // Detect when Python exits
    python.on('close', (code) => {
        console.log(`Python process exited with code ${code}`);
    });

    console.log("DONE")
}

SpawnPlugin("./plugins/say-tick/start.py", 8001)
SpawnPlugin("./plugins/say-time/start.py", 8002)