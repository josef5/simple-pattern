import "./App.css";

function App() {
  const emailAddress = [
    "mynt",
    "@",
    "simple",
    "pattern",
    ".",
    "co",
    ".",
    "uk",
  ].join("");

  return (
    <div className="App flex min-h-screen w-full flex-col justify-center">
      <div className="flex h-[500px] justify-end">
        <div className="flex-1 bg-[url('/images/phones.png')] bg-[length:736px_auto] bg-[position:right_50px_top_0px] bg-no-repeat"></div>
        <div className="w-[220px] flex-col text-neutral-700">
          <h1 className="-mt-4 mb-8 text-[96px] font-semibold leading-[80px] tracking-[-1.92px]">
            my
            <br />
            next
            <br />
            tube
            <br />2
          </h1>

          <p className="mx-0 mb-8 text-xs font-light leading-[17px] text-neutral-600">
            My Next Tube 2 gives you real-time London Underground train times
            right when you need them. See live departures for stations near your
            current location, or quickly jump to your saved favourites. Whether
            you're rushing to work or navigating the city, My Next Tube helps
            you get where you're going without the guesswork.
          </p>

          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noreferrer"
            className="mb-6 inline-block"
          >
            <img
              src={"/images/appstore-badge.svg"}
              alt="Download on the App Store"
              width={120}
              height={40}
              className="h-10 w-[120px]"
            />
          </a>
          <p className="mb-6 text-xs">
            <a
              href={`mailto:${emailAddress}`}
              className="mb-[22px] text-xs font-normal leading-4 no-underline"
            >
              {emailAddress}
            </a>
          </p>
          <p className="pb-12">
            <a
              href="/privacy-policy/index.html"
              className="text-[9px] font-light leading-4 text-neutral-500 no-underline"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
