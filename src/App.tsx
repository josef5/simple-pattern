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
        <div className="w-[220px] flex-col bg-gray-200 text-neutral-700">
          <p className="text-[96px] font-semibold leading-[80px] tracking-[-1.92px]">
            my
            <br />
            next
            <br />
            tube
            <br />2
          </p>

          <p className="m-0 mb-6 max-w-[206px] text-[12px] font-light leading-4 text-[#333333]">
            My Next Tube displays live London Underground departures information
            from the Transport for London feed. As an app for use on the move,
            My Next Tube is specifically designed to display the most important
            information clearly, at a glance and with the minimum of navigation
            necessary.
          </p>

          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noreferrer"
            className="mb-[31px] inline-block"
          >
            <img
              src={"/images/appstore-badge.svg"}
              alt="Download on the App Store"
              width={120}
              height={40}
              className="h-10 w-[120px]"
            />
          </a>

          <a
            href="mailto:mynt@simplepattern.co.uk"
            className="mb-[22px] text-[12px] font-light leading-4 text-[#333333] no-underline"
          >
            mynt@simplepattern.co.uk
          </a>

          <a
            href="/privacy-policy"
            className="text-[12px] font-light leading-4 text-[#333333] no-underline"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
