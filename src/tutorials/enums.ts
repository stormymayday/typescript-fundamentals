enum ServerResponseStatus {
    Success = 200,
    Error = "Error",
}

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
console.log(response);
