// const ipfs = IpfsHttpClient({
//     timeout: 10000,
//     host: "ipfs.infura.io",
//     port: "5001",
//     protocol: "https",
// });
window.onload = function() {
    var content = document.getElementById("TextArea").value;
    const previewBtn = document.querySelector('.preview');
    console.log("Log : " +
        content);
    previewBtn.onclick = function() {

        console.log("Log : " + content + " : Loaded");
    }
    console.log("Log : Its Working ");
};