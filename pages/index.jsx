import HEAD from "next/head";

export default function IndexPage() {
  return (
    <>
      <HEAD>
        <link rel="stylesheet" href="assets/css/index.css" />
      </HEAD>
      <div className="topNav">
        <div className="title">
          <center><h1>Edition Semicolon</h1></center>
        </div>
      </div>
    </>
  );
}
