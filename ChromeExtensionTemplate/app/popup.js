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

const storageKeyPrefix = 'upsCompact';
const PKG_LIST_KEY = `${storageKeyPrefix}PkgList`;
let pkgList = [];

chrome.storage.local.set({PKG_LIST_KEY: [Shipment1, Shipment2]}, () => {
    chrome.storage.local.get([PKG_LIST_KEY], res => {
        pkgList = res.upsCompactPkgList;
        console.log(res);
        console.log(res.upsCompactPkgList);
        console.log(res.upsCompactPkgList.length);
    });
});

$(document).ready(() => {


    const loginBtn = $('#ups-login-btn');
    const loginForm = $('#ups-login-form');
    
    const summaryBtn = $('#ups-summary-btn');
    const listBtn = $('#ups-detail-btn');
    const summaryView = $('#ups-summary-view');
    const listView = $('#ups-list-view');
    const mainView = $('#ups-signin-view');

    const inboundBtn = $('#ups-inbound-btn');
    const outboundBtn = $('#ups-outbound-btn');
    const myChoiceBtn = $('#ups-mychoice-btn');

    console.log('Document loaded!');
    // Hide login
    loginBtn.click((e) => {
        console.log('Login btn clicked');
        e.preventDefault();

        // Hide login on submit
        loginForm.slideUp();
        mainView.slideDown();
        
    });

    // MyChoice login
    myChoiceBtn.click((e) => {
        if (loginForm.is(':hidden')) {
            loginForm.slideDown();
            mainView.slideUp();
        }
    });

    // Switch between inbound/outbound tabs in detail view
    inboundBtn.click((e) => {
        if (outboundBtn.hasClass('ups-underline-gray')) {
            outboundBtn.removeClass('ups-underline-gray');
        }
        if (!inboundBtn.hasClass('ups-underline-gray')) {
            inboundBtn.addClass('ups-underline-gray');
        }
    });
    outboundBtn.click((e) => {
        if (inboundBtn.hasClass('ups-underline-gray')) {
            inboundBtn.removeClass('ups-underline-gray');
        }
        if (!outboundBtn.hasClass('ups-underline-gray')) {
            outboundBtn.addClass('ups-underline-gray');
        }
    });

    // Switch between summary/detail view
    listBtn.click((e) => {
        console.log('list btn clicked');
        summaryView.hide();
        listView.show();
    });
    summaryBtn.click((e) => {
        console.log('summary btn clicked');
        listView.hide();
        summaryView.show();
    });
    
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

