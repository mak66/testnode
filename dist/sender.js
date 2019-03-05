"use strict";

Object.defineProperty(exports, "__esModule", {
            value: true
});
exports.default = sender;
function sender(id, message) {
            var mess = { type: "WirelessMessage",
                        id: id,
                        network: "Serial",
                        time: new Date(),
                        data: message };
            //console.log(mess);
            console.log(JSON.stringify(mess));
}