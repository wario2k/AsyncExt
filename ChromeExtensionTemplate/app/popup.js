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

const STATUSES = ['Order Received', 'In Transit', 'Delivered'];

let packages = {};


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

    const pkgListDiv = $('#ups-package-list');
    const totalPkgCount = $('#ups-total-count');
    const orderReceivedCount = $('#ups-order-count');
    const inTransitCount = $('#ups-transit-count');
    const deliveredCount = $('#ups-delivered-count');

    const updateViews = () => {
        pkgListDiv.empty();
        let counts = [0,0,0];
        for (const trackNum in packages) {
            const pkg = packages[trackNum];
            pkgListDiv.append($(`
            <div class="col-12 p-2">
                <div class="ups-pkg-card pb-1 w-100">
                <div class="p-1 bg-ups-gray w-100"><a href="#" class="">${pkg.TrackingNumber}</a></div>
                <h5 class="pl-1">${STATUSES[pkg.Status]}</h5>
                <strong class="pl-1">Delivery Date: </strong><span>${pkg.DeliveryDateBy}</span>
                </div>
            </div>
            `));
            counts[pkg.Status]++;
        }

        // Update Summary View
        orderReceivedCount.text(counts[0]);
        inTransitCount.text(counts[1]);
        deliveredCount.text(counts[2]);
        totalPkgCount.text(counts[0]+counts[1]+counts[2]);
    };

    // Setup channel between popup and background
    const port = chrome.extension.connect({
        name: 'ups-compact-channel'
    });
    port.postMessage(true);
    port.onMessage.addListener(msg => {
        packages = msg;
        updateViews();
    });

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
});

