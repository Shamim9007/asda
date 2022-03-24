const RightSection = () => {
  return (
    <div className="w-3/4 bg-white">
      <div className="mt-3 flex flex-col px-5">
        <h1 className="mb-2 text-2xl font-bold tracking-wide text-gray-600">
          EXPERIENCE
        </h1>
        <h2 className="text-md mb-2 font-semibold">
          Systems Engineer -{' '}
          <span className="font-normal italic">
            Tata Consultancy Services / Dec 2018 - Present
          </span>
        </h2>
        <div className="mb-5 flex flex-col">
          <h1 className="text-md font-bold">
            Microsoft Power Platform and Microsoft Azure Developer
          </h1>
          <hr className="border-top mb-1 border-black" />
          <div className="mb-2 flex flex-col justify-center">
            <h1 className="text-md mb-1 font-bold">Dynamic Form Generator</h1>
            <p className="text-sm">
              &#9737; This solution took data entry from UIPath to Sharepoint
              where hundreds of data points were stored in a stringified JSON
              format.
              <br />
              &#9737; I designed the JSON structure and the flows that go along
              with the solution to return this structure directly in Power Apps
              and then destrucutre it to make the entire dataset visible in a
              completely dynamic gallery.
              <br />
              &#9737; Each data point may work with a different input control,
              but the same solution could be used by different clients for
              different purposes as plug and play.
              <br />
              &#9737; The app was made responsive for various screen sizes and
              also took optional parameters in its url for opening different
              screens with different datasets.
              <br />
              &#9737; The app only showed users the content for which they had
              access too.
            </p>
          </div>
          <div className="mb-2 flex flex-col justify-center">
            <h1 className="text-md mb-1 font-bold">
              RPA Tool for Contract-Document Verification for Vendors
            </h1>
            <p className="text-sm">
              &#9737; Used Power Automate to fetch contract data from API
              endpoint in SAP Ariba.
              <br />
              &#9737; Using this contract data and UI elements on the website, I
              extracted various kinds of data and downloaded all documents in a
              zip format.
              <br />
              &#9737; Successfully deployed as an unattended scheduled flow that
              runs daily based on which input contracts are given.
            </p>
          </div>
          <div className="mb-5 flex flex-col justify-center">
            <h1 className="text-md mb-1 font-bold">
              Exhaustive Search Chatbot using PVA and Bot Composer
            </h1>
            <p className="text-sm">
              &#9737; An advanced Chatbot that used the power of Bot Composer,
              Graph API and Azure Authentication to search all documents
              (including their content) and return links to these documents
              based on the search keyword.
              <br />
              &#9737; Bot Composer flow added dynamic variable manipulation
              which is not possible by default in PVA.
              <br />
              &#9737; Implented Azure Bot Authentication to allow users to
              search their tenant for documents by logging in,
              <br />
              &#9737; Users will only get documents that they have access too.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSection
