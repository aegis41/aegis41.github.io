window.onload = function() {
    var imageList = {
        "images":[
            "1-time-mailing",
            "add-reply",
            "add-thread",
            "add",
            "address-verification",
            "associate",
            "button",
            "card-history",
            "card-issuance",
            "checkbox",
            "compare",
            "copy",
            "custom-button",
            "data-grid",
            "date-picker",
            "delete",
            "details",
            "disassociate",
            "edit",
            "email",
            "exceptions",
            "expedite",
            "fees",
            "file-upload",
            "filters-apply",
            "filters-remove",
            "flag",
            "gate-flags",
            "history-summary-card",
            "history-summary-photo",
            "history-summary-signature",
            "hold",
            "hyperlink",
            "lock",
            "logo-man-sil",
            "multi-line",
            "nav-icon-card-designs-hover",
            "nav-icon-card-designs",
            "nav-icon-form-designs-hover",
            "nav-icon-form-designs",
            "nav-icon-logs-hover",
            "nav-icon-logs",
            "nav-icon-reports",
            "nav-icon-roles-hover",
            "nav-icon-roles",
            "nav-icon-users-hover",
            "nav-icon-users",
            "nav-icon-workflows-hover",
            "nav-icon-workflows",
            "override-biolink",
            "override-icao",
            "photo-capture",
            "photo-history",
            "print",
            "pull",
            "reissue",
            "reprint",
            "resolve",
            "returned-mail",
            "review",
            "save",
            "scan-barcode",
            "search",
            "select-box",
            "set-image",
            "sign-here",
            "signature-capture",
            "signature-history",
            "special-mailing",
            "status-reasons",
            "status",
            "text-area",
            "text",
            "unlock",
            "view",
            "workflow-application-queue",
            "workflow-enrollment-vip",
            "workflow-return-mail"
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