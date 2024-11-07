import "./App.css";

function App() {
  return (
    <div className="App flex min-h-screen w-full">
      <div className="m-auto max-w-3xl text-4xl">
        <div className="flex flex-row">
          <div className="w-1/2">
            <img
              src="/images/app-mockup.png"
              alt="My Next Tube app on an iPhone"
              className="max-w-80"
            />
          </div>
          <div className="mt-24 flex w-1/2 flex-col gap-8 px-4 text-left text-base font-normal">
            <h1 className="flex text-6xl font-thin">My Next Tube</h1>
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
