const IpfsHttpClient = require("ipfs-http-client");

export default async (req, res) => {
  const ipfs = IpfsHttpClient({
    timeout: 10000,
    host: "ipfs.infura.io",
    port: "5001",
    protocol: "https",
  });

  if (req.method == "POST") {
    console.log("Its POST Method");
    var parsedBody = JSON.parse(req.body);
    var content = parsedBody.cnt;
    var file = await ipfs.add(content);
    res.json({ id: file.path });
  } else {
    console.log("Its non POST Method");
    res.json({status: 401});
  }
};
