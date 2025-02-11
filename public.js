const socket = io();

function sendMessage() {
    let msg = document.getElementById("message").value;
    socket.emit("message", msg);
}

socket.on("message", (msg) => {
    let ul = document.getElementById("messages");
    let li = document.createElement("li");
    li.innerText = msg;
    ul.appendChild(li);
});
