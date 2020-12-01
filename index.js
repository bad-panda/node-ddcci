"use strict";

const ddcci = require("bindings")("ddcci");
const vcp = require("./vcp");

module.exports = {
    vcp

  , _getVCP: ddcci.getVCP
  , _setVCP: ddcci.setVCP
  , _refresh: ddcci.refresh
  , getMonitorList: ddcci.getMonitorList
  , getNumberAdapters: ddcci.getNumberAdapters

};

