import HEAD from "next/head";
import React, { useEffect, useState } from "react";
const IpfsHttpClient = require("ipfs-http-client");

export default function IndexPage({ res }) {
  let [state, setstate] = useState({
    article: "A very awesome article.",
    title: "A very Awesome Title",
  });

  let publish = async () => {
    const ipfs = IpfsHttpClient({
      timeout: 10000,
      host: "ipfs.infura.io",
      port: "5001",
      protocol: "https",
    });
    var file = await ipfs.add(state.article);

    var url = "https://edition-semicolon.rishabh.live/r/" + file.path;

    window.open(url, "_blank", "location=yes,scrollbars=yes,status=yes");

    // console.log(state.article);
    // console.log(state.title);
  };

  function handleArticleChange(e) {
    setstate({
      article: e.target.value,
    });
  }

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
              value={state.article}
              onChange={handleArticleChange}
            />
          </div>
        </div>
      </div>

      <div className="mainContentArea">
        <div id="btn" className="publish">
          <button
            class="noselect"
            style={{ background: "none", border: "none", fontSize: "20px", cursor: "copy", color: "white" }}
            onClick={publish}
          >
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
