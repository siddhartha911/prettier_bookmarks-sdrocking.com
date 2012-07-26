const {classes: Cc, interfaces: Ci, utils: Cu} = Components;
Cu.import("resource://gre/modules/Services.jsm");

const ADDON_NAME = "Prettier Bookmarks Toolbar";

/* Function adapted from the extension "Restartless Restart" by Eric Vold */
(function(global) global.include = function include(src) {
  var o = {};
  Cu.import("resource://gre/modules/Services.jsm", o);
  var uri = o.Services.io.newURI(src, null, o.Services.io.newURI(__SCRIPT_URI_SPEC__, null, null));
  o.Services.scriptloader.loadSubScript(uri.spec, global);
})(this);

include("scripts/utils.js");
include("scripts/pref.js");
include("scripts/helpers.js");

function startup(data, reason) {
  loadAndObserve("australisTheme", "styles/australisTheme.css");
  loadAndObserve("specialIcons", "styles/specialIcons.css");
  loadAndObserve("cropLongLabels", "styles/cropLongLabels.css");
  loadAndObserve("hideDropmarkers", "styles/hideDropmarkers.css");
  loadAndObserve("preventOverflow", "styles/preventOverflow.css");
}

function shutdown(data, reason) {
  if(reason == APP_SHUTDOWN)  return;
  unload();
}

function install() {}
function uninstall() {}
