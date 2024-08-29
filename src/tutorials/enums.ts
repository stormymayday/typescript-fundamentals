enum ServerResponseStatus {
    Success = 200,
    Error = 500,
}

// Gotcha : Reverse Mapping
Object.values(ServerResponseStatus).forEach((value) => {
    // console.log(value);
    if (typeof value === "number") {
        console.log(value);
    }
});

interface ServerResponse {
    result: ServerResponseStatus;
    data: string[];
}

function getServerResponse(): ServerResponse {
    return {
        result: ServerResponseStatus.Success,
        // result: ServerResponseStatus.Error,
        data: ["first item", "second item"],
    };
}

const response: ServerResponse = getServerResponse();
// console.log(response);
