fetch('https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(JSON.stringify(myJson));
    });

import Mercury from "@postlight/mercury-parser";

const url='https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss';
Mercury.parse(url).then(result => console.log(result));