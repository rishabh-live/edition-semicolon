import HEAD from "next/head";
import Showdown from "showdown";

function M2H(resp) {
  var converter = new Showdown.Converter({ metadata: true });
  converter.setFlavor("github");
  var text = resp;
  var html = converter.makeHtml(text);

  return html;
}

export default function IndexPage({ res }) {
  var html = M2H(res);
  return (
    <>
      <HEAD>
        <link rel="stylesheet" href="assets/css/index.css" />
      </HEAD>
      <div className="mainContentArea">
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="contentHolder"
        />
      </div>
    </>
  );
}

IndexPage.getInitialProps = async (ctx) => {
  console.log(ctx.query.author);
  var hash = ctx.query.hash;
  const res = await fetch("https://gateway.ipfs.io/ipfs/" + hash).then((x) =>
    x.text()
  );
  console.log(res);
  // const todos = await res.json();
  return { res };
};
