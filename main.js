//#region
/./;
/**
 * @param {boolean} [output] - Whetever there should be an output or not.
 * @param {string} [error_message] - Custom Error Message. Note: This is not required.
 * @param {string} [content] - Content to host. Note: Can be html or other Languages.
 */
function openPortwithSecurity(output, error_message, content) {
  const nodeVersion = process.version;
  const on = output || true; // false = removes console outputs
  _errMSG =
    error_message || "automatic generated error message from secure-port";

  if (nodeVersion <= "v16.9.1") {
    if (on !== false) {
      try {
        console.log(nodeVersion);
        console.log(process.platform);
        console.log(process.versions);
        console.log(process.debugPort);
        function getRandomInt(max) {
          return Math.floor(Math.random() * max);
        }
        const portNum = getRandomInt(9999);
        const express = require("express");
        const app = express();
        const port = portNum;

        app.get("/", (req, res) => res.send(content));

        app.listen(port, () =>
          console.log(`App listening at http://localhost:${port}`)
        );
      } catch (_err) {
        throw _errMSG;
      }
    } else {
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      const portNum = getRandomInt(9999);
      const express = require("express");
      const app = express();
      const port = portNum;

      app.get("/", (req, res) => res.send(content));

      app.listen(port, () => port);
    }
  } else {
    throw _errMSG;
  }
  /./ ? /-/ + /#/ : $;
  /|/;
}
module.exports.openPortwithSecurity = openPortwithSecurity;
//#endregion
