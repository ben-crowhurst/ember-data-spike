//
// Handle POST request for the creation of a new asynchronous search.
//
exports.create = function(request, response) {
    console.log('Search Query: ' + JSON.stringify(request.body, undefined, 2));

    response.statusCode = 202;

    response.send({
        "search": {
            "id": "7ab05a72d3cf2ad68c5816713e07efc5",
            "vrm": request.body.search.vrm.toUpperCase()
        }
    });
};

//
// Handle GET request for the fetching of returned search results.
//
exports.read = function(request, response) {
    console.log('Fetching Results for Search: ' + request.params.id);

    response.statusCode = 200;

    response.send({
        "search": {
            "id": request.params.id,
            "vrm": "SB53YUK",
            "result_ids": [1,2]
        },"results": [
            {
                "id":1,
                 "vrm": "SB53YUK",
                 "make": "Ford",
                 "model": "Focus",
                 "colour": "Blue"
            },
            {
                "id":2,
                "vrm": "SB53YUK",
                "make": "Ford",
                "model": "Mondeo",
                "colour": "Green"
            }
        ]
    });
};