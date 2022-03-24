const SecondPage = () => {
  return (
    <div className="mx-auto flex w-2/4 flex-col border bg-white pt-5 pl-5">
      <div className="mb-5 flex flex-col justify-center px-5">
        <div className="flex flex-col items-baseline">
          <div className="mb-3">
            <h1 className="text-md mb-1 font-bold">
              Replacing UIPath State Management with Power Automate
            </h1>
            <p className="text-sm">
              &#9737; A novel yet simple solution to implement state management
              in our projects using UI and Cloud flows using Error Handling
              concepts.
              <br />
              &#9737; Implemented fail-safes for data corruption, internet
              connectivity or server failures for Unattended flows that go
              through several files.
              <br />
              &#9737; Can be implemented for both Cloud and UI flows.
            </p>
          </div>

          <div>
            <h1 className="text-md font-bold">
              Rolls-Royce Aircraft Engine Designer
            </h1>
            <hr className="border-top mb-1 border-black" />
            <p className="text-sm">
              &#9737; Worked on initial to final designs of several components
              of aircraft engines.
              <br />
              &#9737; My work included day to day interactions with Customers
              and Suppliers to ensure the live solutions were going as per
              expectation.
              <br />
              &#9737; Worked with Model Based Definition.
              <br />
              &#9737; Developed a Chatbot from scratch using Python.
            </p>
          </div>

          <div>
            <h1 className="mt-5 mb-2 text-2xl font-bold tracking-wide text-gray-600">
              REACT PORTFOLIO
            </h1>

            <h1 className="text-md mt-2 font-bold">Medium Clone</h1>
            <a
              className="text-sm text-blue-500"
              href="https://cranky-dijkstra-00f8f7.netlify.app"
            >
              (Link)
            </a>
            <hr className="border-top mb-1 border-black" />
            <p className="text-sm">
              A clone of the popular blogging site Medium. I used Next JS for
              making my site, Tailwind for styling and Sanity for content
              management. It uses Incremental Static Regeneration (ISR) to build
              pages, without needing to rebuild the entire site.
            </p>

            <h1 className="text-md mt-2 font-bold">Wordle App</h1>
            <a
              className="text-sm text-blue-500"
              href="https://mystifying-benz-fd2eeb.netlify.app"
            >
              (Link)
            </a>
            <hr className="border-top mb-1 border-black" />
            <p className="text-sm">
              A more dynamic reimagination of the popular Wordle game. Uses
              basics of React JS with states and hooks to make a more varied and
              dynamic game that can take multiple starting lengths for words
              rather than the usual 5 letter words in Wordle. I have also
              recreated the app using React Native.
            </p>

            <h1 className="text-md mt-2 font-bold">Movie Database</h1>
            <a
              className="text-sm text-blue-500"
              href="https://quirky-davinci-80a37b.netlify.app"
            >
              (Link)
            </a>
            <hr className="border-top mb-1 border-black" />
            <p className="text-sm">
              A movie database which displays the details of all the movies
              based on recent releases. It is fully responsive and includes a
              fast search option. Users can click on individual movies and get a
              Netflix like information popup. I used styled-components for
              styling this website.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-5">
        <h1 className="mb-2 text-2xl font-bold tracking-wide text-gray-600">
          Papers Published
        </h1>
        <p className="text-md font-semibold">
          Search Operations Using Quadcopters
        </p>
        <a
          className="mb-5 text-xs text-blue-500"
          href="http://iraj.in/journal/IJMPE/paper_detail.php?paper_id=5368&name=Search_Operations_Using_Quadcopters"
        >
          Website Link - Victim search and rescue using swarm agents
        </a>
      </div>

      <div className="flex flex-col px-5">
        <h1 className="mb-2 text-2xl font-bold tracking-wide text-gray-600">
          Certifications
        </h1>
        <p className="text-sm">PL-900: Microsoft Power Platform Fundamentals</p>
      </div>
    </div>
  )
}

export default SecondPage
