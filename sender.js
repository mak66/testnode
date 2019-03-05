export default function sender (id, message) {
            let mess = {type: "WirelessMessage",
                        id: id,
                        network: "Serial",
                        time: new Date(),
                        data: message,};
            //console.log(mess);
            console.log(JSON.stringify(mess));
}
