const IpfsHttpClient = require("ipfs-http-client");

export default async (req, res) => {
  const ipfs = IpfsHttpClient({
    timeout: 10000,
    host: "ipfs.infura.io",
    port: "5001",
    protocol: "https",
  });

  var parsedBody = JSON.parse(req.body);

  if (req.method == "POST") {
    var content = parsedBody.cnt;
    var file = ipfs.add(content);
    res.json({ id: file.path });
  } else {
    res.status(401);
  }
};
