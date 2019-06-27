'use strict';

// Run popup initialization as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {

    popup.init();
    
    //pullPackageInformation.parseJson();

});

var popup = {
    init: function () {
        console.log('Popup loaded!');
    }
};

var pullPackageInformation = {
    parseJson: function () {
        var shipmentObject = JSON.parse(json_string);
    }
};

const Shipment1 = {
    DeliveryDateBy: '6/27/2019',
    Status: 'In Transit',
    TrackingNumber: '1z939248923049320'
};
const Shipment2 = {
    DeliveryDateBy: '6/27/2019',
    Status: 'Order Processed',
    TrackingNumber: '1z939248923049320'
};
const Shipment3 = {
    DeliveryDateBy: '6/25/2019',
    Status: 'Delivered',
    TrackingNumber: '1z939248923049320'
};
