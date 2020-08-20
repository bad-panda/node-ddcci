# gyg-ddcci

## Installation

gyg-ddcci is currently only supported on Windows.

````bash
npm install git+https://github.com/bad-panda/gyg-display-node-module.git
yarn add https://github.com/bad-panda/gyg-display-node-module.git
````

## Usage

````js
const ddcci = require("@hensm/ddcci");

for (const monitor of ddcci.getMonitorList()) {
    console.log(`${monitor}`);
}
````

## Docs

* ### `getMonitorList()`
  Gets a list of the current connected monitors.
  * #### Return value
    An array of `String` containing the monitor IDs.
    Ex.
    `{"DeviceName":"\\.\DISPLAY1\Monitor0","DeviceString":"NVIDIA GeForce RTX 2070","DeviceID":"MONITOR\PHLC18F\{4d36e96e-e325-11ce-bfc1-08002be10318}\0001","MonitorName":"Generic PnP Monitor","DeviceFlags":"multi "}`

* ### `_refresh()`
  Refreshes the monitor list.


