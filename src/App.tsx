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
    <div className="App flex min-h-screen w-full">
      <div className="mx-auto max-w-3xl sm:m-auto">
        <div className="grid grid-cols-1 grid-rows-[min-content_1fr] gap-10 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-12">
          <div className="row-span-2 flex justify-center sm:justify-start">
            <img
              src="/images/app-mockup.jpg"
              alt="My Next Tube app on an iPhone 16 Pro"
              className="m-auto h-auto max-h-[80%] max-w-60 object-contain sm:max-w-80"
            />
          </div>

          <h1 className="row-start-1 mx-auto mt-12 flex max-w-xs text-center text-5xl font-thin sm:col-start-2 sm:row-start-1 sm:mx-0 sm:mt-24 sm:max-w-none sm:text-left sm:text-5xl md:text-6xl">
            My Next Tube
          </h1>

          <div className="col-span-1 col-end-2 mx-12 mb-12 flex max-w-xs flex-col gap-8 text-left text-base font-normal sm:col-start-2 sm:mx-0 sm:pr-8">
            <div className="">
              <p className="mb-4">
                My Next Tube displays live London Underground departures
                information from the Transport for London feed.
              </p>
              <p>
                As an app for use on the move, My Next Tube is specifically
                designed to display the most important information clearly, at a
                glance and with the minimum of navigation necessary.
              </p>
            </div>
            <div className="">
              <a
                href="https://itunes.apple.com/gb/app/my-next-tube/id898106340?mt=8"
                target="_blank"
              >
                <img src="/images/appstore-badge.svg" alt="Appstore logo" />
              </a>
            </div>
            <div>
              <p className="">
                <a className="hover:underline" href={`mailto:${emailAddress}`}>
                  {emailAddress}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
