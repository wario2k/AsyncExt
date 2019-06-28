'use strict';

const Shipment1 = {
    DeliveryDateBy: '6/28/2019',
    Status: 0,
    TrackingNumber: '1Z939248923049001'
};

const Shipment2 = {
    DeliveryDateBy: '6/28/2019',
    Status: 0,
    TrackingNumber: '1Z939248923049002'
};
const Shipment3 = {
    DeliveryDateBy: '6/29/2019',
    Status: 0,
    TrackingNumber: '1Z939248923049003'
};

const TIMER = 5000;
const STATES = [
    [Shipment1],
    [Shipment2],
    [Shipment1],
    [Shipment1,Shipment3],
    [Shipment2],
    [Shipment3]
];
let index = 0;

const STATUSES = ['Order Received', 'In Transit', 'Delivered'];
let packages = {};
var port;
var timer;
function showNotification(pkg) {
    if(window.Notification) {
        new Notification(`${pkg.TrackingNumber} Update`, {
            body: `Package ${pkg.TrackingNumber}'s state is ${STATUSES[pkg.Status]}`
        });
    }
}
function getUpdate() {
    // Get updates every 15 seconds
    timer = setInterval(() => {
        console.log(`${STATES} at ${index}`);
        console.log(`is ${STATES[index]}`);
        for (const pkg of STATES[index]) {
            // Add package or update status
            if (packages[pkg.TrackingNumber]) {
                pkg.Status++;
            }
            packages[pkg.TrackingNumber] = pkg;
            showNotification(pkg);
        }

        // Try to send an update
        try {
            port.postMessage(packages);
        } catch(ex) {
            console.error(`Connection failed: ${ex}`);
        }

        index++;
        // Stop timer once its done going through states
        if(index >=  STATES.length) {
            clearInterval(timer);
        }
    }, TIMER);
}
getUpdate();

chrome.extension.onConnect.addListener(connection => {
    console.log("Connected .....");
    port = connection;
    // If popup is opened, send latest list of packages
    port.onMessage.addListener(msg => {
         console.log("message recieved: " + msg);
         port.postMessage(packages);
    });

})
