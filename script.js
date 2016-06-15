// this is an object which uses keys to hold arrays of the image names that belong to that list
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

// when the window loads, it runs this function
window.onload = function () {
    makeListsSelect ()
    render();
}

// this function is designed to render the images in the DOM
// it accepts three arguments: the size factor used to display the images, the number of images to display,
// and the name of the list of images to display
function render (sizeFactor, numberOfImages, listName) {
    // configure the directory where the images are located
    imageDir = "img",

    // the next three lines of code demonstrate Javascript's means for default values
    
    // if a list name is passed in, use it; otherwise, use "all"
    listName = listName || "all",
    
    // if a size factor is passed in , use it; otherwise, use 8
    sizeFactor = sizeFactor || 8,
    
    // if a number of images is passed in, use it; otherwise use 4
    sizes = numberOfImages || 4,
    
    // this establishes a variable for the unordered list element in the DOM. Doing this variable assingment allows
    // us to reference this variable instead of constantly grabbing it from the document
    list = document.getElementById("list");
    
    // here, we want to loop the image list to get all of the images
    // we initialize the loop index (i) and then set a condition (i < imageLists[listName].length)
    // our condition reads "the value of index is less than the length of the list"
    // imageLists[listName] references our imageList object above and [listName] is the key we're looking for (e.g. "all" or "favorites")
    // after the condition, we need to increment the index (i++)
    for (i = 0; i < imageLists[listName].length; i++) {

        // here we make a new list item ("li") element by using the document's createElement method
        var entry = document.createElement("li");

        // here, we create a new text node from the current array element in the list key from the lists object and append that text
        // node to the list item element that we called "entry" in the line above
        entry.appendChild(document.createTextNode(imageLists[listName][i]));

        // now we're looping inside a loop. we can't use i as the index variable this time, so we use "j" instead
        // this loop says that the index is equal to the number of images we want and that as long as
        // the index is greater than zero, run the loop and decrement the index.
        // It's done this way so that the display starts with the largest size and ends with the smallest
        for (j = sizes; j > 0; j--){

            // create a new img element
            image = document.createElement("img");

            // set some attributes
            // src attribute is set to the a concatenated string that combines the directory, file name, and file extension
            image.setAttribute("src", imageDir + "/" + imageLists[listName][i] + ".svg");

            // height and width attributes are set to the current index (remember from big to small) times the size factor
            image.setAttribute("height", j * sizeFactor);
            image.setAttribute("width", j * sizeFactor);

            // append the image element to the list item element
            entry.appendChild(image);
        }

        // append the list item element (with its text node and img element) to the list element
        list.appendChild(entry);
    }
}

// this function is run when the "apply" button is pressed
function apply () {

    // first we cacluate our values
    // these come from the elements on the form and are obtained by the getElementById method of the document object
    // if there is no value on the element, we default it with an or (double pipes - || ) again
    var sizeFactor = document.getElementById("size-factor").value || 8,
        numberOfImages = document.getElementById("number-of-images").value || 4,
        listName = document.getElementById("listNames").value || "all";

        // get the list element
        list = document.getElementById("list");
        // clear its innerHTML (the list items it owns)
        list.innerHTML = "";
        // call the render function that we wrote above and pass it our new values
        render(sizeFactor, numberOfImages, listName);
}

// this fucntion sets the form back to its defaults
function reset () {
    document.getElementById("size-factor").value = 8;
    document.getElementById("number-of-images").value = 4;
    // it also calls the apply function to clear the list which calls the render function to show the default content
    apply();
}

// this function returns an array of the lists
function getLists (lists) {
    // default values again because we *may* want to pass other list items in here.
    lists = lists || imageLists;
    // Object.keys(object) is a method that makes an array of all the keys in an object.
    // In our example this is just "all" and "favorites" from above
    return Object.keys(lists);
}

// this function makes the select element for us using the lists we got from getLists()
function makeListsSelect () {
    // our list array is the returned value of the getLists() function
    var listsArray = getLists(),
    
        // the select element from the form
        select = document.getElementById("listNames");

    // since this is a different function, it has a new scope and we can use i here without interfering
    // this will loop through (or iterate) the listsArray
    for (i=0; i < listsArray.length; i++) {
        // since the listsArray is just an array of the names of lists
        // we set the listName variable to the current index's element
        let listName = listsArray[i];

        // create a new option element and give it a value and text property equal to the current listName
        option = document.createElement("option");
        option.value = listName;
        option.text = listName;

        // if the list is called "all", then let's make that the selected option initially
        if (listName === "all") {
            option.selected = "selected";
        }

        // add the option element to our select element
        select.add(option);
    }
}