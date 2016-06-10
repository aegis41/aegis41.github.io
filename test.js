window.onload = function() {
    var imageList = {
        "images":[
            "img/1-time-mailing",
            "img/add-reply",
            "img/add-thread",
            "img/add",
            "img/address-verification",
            "img/associate",
            "img/button",
            "img/card-history",
            "img/card-issuance",
            "img/checkbox",
            "img/compare",
            "img/copy",
            "img/custom-button",
            "img/data-grid",
            "img/date-picker",
            "img/delete",
            "img/details",
            "img/disassociate",
            "img/edit",
            "img/email",
            "img/exceptions",
            "img/expedite",
            "img/fees",
            "img/file-upload",
            "img/filters-apply",
            "img/filters-remove",
            "img/flag",
            "img/gate-flags",
            "img/history-summary-card",
            "img/history-summary-photo",
            "img/history-summary-signature",
            "img/hold",
            "img/hyperlink",
            "img/lock",
            "img/logo-man-sil",
            "img/multi-line",
            "img/nav-icon-card-designs-hover",
            "img/nav-icon-card-designs",
            "img/nav-icon-form-designs-hover",
            "img/nav-icon-form-designs",
            "img/nav-icon-logs-hover",
            "img/nav-icon-logs",
            "img/nav-icon-reports",
            "img/nav-icon-roles-hover",
            "img/nav-icon-roles",
            "img/nav-icon-users-hover",
            "img/nav-icon-users",
            "img/nav-icon-workflows-hover",
            "img/nav-icon-workflows",
            "img/override-biolink",
            "img/override-icao",
            "img/photo-capture",
            "img/photo-history",
            "img/print",
            "img/pull",
            "img/reissue",
            "img/reprint",
            "img/resolve",
            "img/returned-mail",
            "img/review",
            "img/save",
            "img/scan-barcode",
            "img/search",
            "img/select-box",
            "img/set-image",
            "img/sign-here",
            "img/signature-capture",
            "img/signature-history",
            "img/special-mailing",
            "img/status-reasons",
            "img/status",
            "img/text-area",
            "img/text",
            "img/unlock",
            "img/view",
            "img/workflow-application-queue",
            "img/workflow-enrollment-vip",
            "img/workflow-return-mail"
        ]
    },
    sizeFactor = 8,
    sizes = 24,
    list = document.getElementById("list");
    for (i = 0; i < imageList.images.length; i++) {
        var entry = document.createElement("li");
        entry.appendChild(document.createTextNode(imageList.images[i]));
        for (j = sizes; j > 0; j--){
            image = document.createElement("img");
            image.setAttribute("src", imageList.images[i] + ".svg");
            image.setAttribute("height", j * sizeFactor);
            image.setAttribute("width", j * sizeFactor);
            entry.appendChild(image);
        }
        list.appendChild(entry);
    }
}
