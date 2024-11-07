import "./App.css";

function App() {
  return (
    <div className="App flex min-h-screen w-full">
      <div className="m-auto max-w-3xl text-4xl">
        <div className="grid grid-cols-2 grid-rows-[min-content_1fr] gap-8">
          <div className="row-span-2 flex justify-center">
            <img
              src="/images/app-mockup.png"
              alt="My Next Tube app on an iPhone 16 Pro"
              className="max-w-80"
            />
          </div>
          <h1 className="mt-24 flex text-6xl font-thin">My Next Tube</h1>

          <div className="col-span-1 col-start-2 col-end-2 flex flex-col gap-8 pr-8 text-left text-base font-normal">
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
                <a
                  className="hover:underline"
                  href="mailto:mynt@simplepattern.co.uk"
                >
                  mynt@simplepattern.co.uk
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
