import HEAD from "next/head";

export default function IndexPage({ res }) {
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
            ></textarea>
          </div>
        </div>
      </div>
      <div className="mainContentArea">
        <div id="btn">
          <span class="noselect">Preview</span>
          <div id="circle"></div>
        </div>{" "}
        <div id="btn">
          <span class="noselect">Publish</span>
          <div id="circle"></div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/ipfs/dist/index.min.js"></script>
      <script src="/assets/js/ipfs-upload.js"></script>
    </>
  );
}
