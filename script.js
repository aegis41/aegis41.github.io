var imageLists = {
    "all" : [
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
    ],
    "favorites" : [
        "expedite",
        "scan-barcode"
    ]
}

window.onload = function () {
    makeListsSelect ()
    render();
}

function render (sizeFactor, numberOfImages, listName) {
    imageDir = "img",
    listName = listName || "all",
    sizeFactor = sizeFactor || 8,
    sizes = numberOfImages || 4,
    list = document.getElementById("list");
    for (i = 0; i < imageLists[listName].length; i++) {
        var entry = document.createElement("li");
        entry.appendChild(document.createTextNode(imageLists[listName][i]));
        for (j = sizes; j > 0; j--){ 
            image = document.createElement("img");
            image.setAttribute("src", imageDir + "/" + imageLists[listName][i] + ".svg");
            image.setAttribute("height", j * sizeFactor);
            image.setAttribute("width", j * sizeFactor);
            entry.appendChild(image);
        }
        list.appendChild(entry);
    }
}

function apply () {
    var sizeFactor = document.getElementById("size-factor").value || 8,
        numberOfImages = document.getElementById("number-of-images").value || 4,
        listName = document.getElementById("listNames").value || "all";
        list = document.getElementById("list");
        list.innerHTML = "";
        render(sizeFactor, numberOfImages, listName);
}

function reset () {
    document.getElementById("size-factor").value = 8;
    document.getElementById("number-of-images").value = 4;
    apply();
}

function getLists (lists) {
    lists = lists || imageLists;
    return Object.keys(lists);
}

function makeListsSelect () {
    var listsArray = getLists(),
        select = document.getElementById("listNames");
    for (i=0; i < listsArray.length; i++) {
        let listName = listsArray[i];
        option = document.createElement("option");
        option.value = listName;
        option.text = listName;
        if (listName === "all") {
            option.selected = "selected";
        }
        select.add(option);
    }
}