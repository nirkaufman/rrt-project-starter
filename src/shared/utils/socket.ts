const WS_ROOT = "ws://echo.websocket.org/";
const websocket = new WebSocket(WS_ROOT);

let timer: any = null;

websocket.onopen = () => {
    console.log("socket opened");

    timer = setInterval(() => {
        websocket.send("Message from server: data updated.");
    }, 10000);
};

// return the message received from server
function subscribe(callBack: Function) {
    websocket.onmessage = event => {
        callBack(event.data);
    };
}

// stop messages
function unsubscribe () {
    clearInterval(timer);
}

export const socket = {
    subscribe,
    unsubscribe
};

