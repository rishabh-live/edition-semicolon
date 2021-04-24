import HEAD from "next/head";
const IpfsHttpClient = require("ipfs-http-client");

export default function IndexPage({ res }) {
  state = {
    article: "A very awesome article.",
    title: "A very Awesome Title",
  };

  let publish = (e) => {
    // const ipfs = IpfsHttpClient({
    //   timeout: 10000,
    //   host: "ipfs.infura.io",
    //   port: "5001",
    //   protocol: "https",
    // });
    // var file = await ipfs.add(content);
    // return

    console.log(this.state.article);
    console.log(this.state.title);
  };

  return (
    <>
      <HEAD>
        <link rel="stylesheet" href="/assets/css/create.css" />{" "}
        <link
          href="https://fonts.googleapis.com/css?family=Ubuntu:300,400"
          rel="stylesheet"
          type="text/css"
        />
      </HEAD>
      <div className="mainContentArea">
        <div ng-app="myApp">
          <div ng-controller="AppCtrl" align="center">
            <textarea
              id="TextArea"
              ng-model="loremIpsum"
              ng-keyup="autoExpand($event)"
              placeholder="Start Writing in Markdown to share with the world..."
              className="contentHolder"
              value={this.state.article}
            />
          </div>
        </div>
      </div>
      <div className="mainContentArea">
        <div id="btn" className="publish">
          <button class="noselect" onClick={publish}>
            Publish To IPFS
          </button>
          <div id="circle"></div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/ipfs/dist/index.min.js"></script>
      <script src="/assets/js/ipfs-upload.js"></script>
      <script src="/assets/js/textarea.js"></script>
    </>
  );
}
