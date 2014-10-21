(function () {
    'use strict';
    /*jslint browser:true, plusplus: true, devel: true */
    var i,
        allIncludes = document.querySelectorAll('[data-hi-href]'),
        numberOfIncludes = allIncludes.length,
        linkImport,
        contentDom,
        errorMsg;

    function hi(currentInclude) {
        linkImport = document.createElement('link');
        linkImport.rel = 'import';
        linkImport.href = currentInclude.getAttribute('data-hi-href');

        linkImport.addEventListener('load', function (event) {
            contentDom = event.target.import;
            currentInclude.outerHTML = contentDom.body.innerHTML;
        });

        linkImport.addEventListener('error', function (event) {
            errorMsg = 'Error loading import: ' + event.target.href;
            console.log(errorMsg);
            currentInclude.setAttribute('style', 'color: red; padding: .5em; margin: .5em 0; border: 2px dotted;');
            currentInclude.innerHTML = errorMsg;
        });

        document.head.appendChild(linkImport);
    }

    for (i = 0; i < numberOfIncludes; i++) {
        hi(allIncludes[i]);
    }

}());