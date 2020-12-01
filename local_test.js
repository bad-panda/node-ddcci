const ddcci = require("./build/Release/ddcci");

for (const monitor of ddcci.getMonitorList()) {
    console.log(`${monitor}`);
}

console.log(`${ddcci.getNumberAdapters()}`)