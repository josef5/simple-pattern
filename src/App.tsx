import "./App.css";

function App() {
  /* const emailAddress = [
    "mynt",
    "@",
    "simple",
    "pattern",
    ".",
    "co",
    ".",
    "uk",
  ].join(""); */

  return (
    <div className="App flex min-h-screen w-full flex-col justify-center bg-blue-200">
      <div className="flex h-[500px] justify-end bg-gray-400">
        <div className="flex-1 bg-[url('/images/phones.png')] bg-[length:736px_auto] bg-[position:right_50px_top_0px] bg-no-repeat"></div>
        <div className="w-[220px] bg-gray-200 text-neutral-700">foo</div>
      </div>
    </div>
  );
}

export default App;
