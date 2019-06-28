'use strict';

// Run popup initialization as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
    popup.init();
});

var popup = {
    init: function () {
        console.log('Popup loaded!');
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

$(document).ready(() => {
    const Shipment1_TrackingNumber = $('#Shipment1_TrackingNumber');
    Shipment1_TrackingNumber.text(Shipment1.TrackingNumber);
    const Shipment1_DeliveryDateBy = $('#Shipment1_DeliveryDateBy');
    Shipment1_DeliveryDateBy.text(Shipment1.DeliveryDateBy);
    const Shipment1_Status = $('#Shipment1_Status');
    Shipment1_Status.text(Shipment1.Status);

    const Shipment2_TrackingNumber = $('#Shipment2_TrackingNumber');
    Shipment2_TrackingNumber.text(Shipment2.TrackingNumber);
    const Shipment2_DeliveryDateBy = $('#Shipment2_DeliveryDateBy');
    Shipment2_DeliveryDateBy.text(Shipment2.DeliveryDateBy);
    const Shipment2_Status = $('#Shipment2_Status');
    Shipment2_Status.text(Shipment2.Status);

    const Shipment3_TrackingNumber = $('#Shipment3_TrackingNumber');
    Shipment3_TrackingNumber.text(Shipment3.TrackingNumber);
    const Shipment3_DeliveryDateBy = $('#Shipment3_DeliveryDateBy');
    Shipment3_DeliveryDateBy.text(Shipment3.DeliveryDateBy);
    const Shipment3_Status = $('#Shipment3_Status');
    Shipment3_Status.text(Shipment3.Status);
});

