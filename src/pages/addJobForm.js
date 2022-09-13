import React, { useState, useEffect } from "react";

const Index = ({ setShowModal }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [expiry, setExpiry] = useState("");
  const [fullTime, setFullTime] = useState("");
  const [partTime, setPartTime] = useState("");
  const [contract, setContract] = useState("");
  const [technology, setTechnology] = useState("");
  const [business, setBusiness] = useState("");
  const [growthMarket, setGrowthMarket] = useState("");

  // let handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       let res = await fetch("/jobs", {
  //         method: "POST",
  //         body: JSON.stringify({
  //             jobTitle: jobTitle,
  //             company: company,
  //             location: location,
  //             expiry: expiry,
  //             fullTime: fullTime,
  //             contract: contract,
  //             technology: technology,
  //             business: business,
  //             growthMarket: growthMarket,
  //         }),
  //       });
  //       let resJson = await res.json();
  //       if (res.status === 200) {
  //         setName("");
  //         setEmail("");
  //         setMessage("Jon created successfully");
  //       } else {
  //         setMessage("Some error occured");
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  // const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <div
        className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
        id="modal"
      >
        <div
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
        >
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400 text-left">
            <h1 className="text-blue font-lg font-bold tracking-normal leading-tight mb-4">
              New Job
            </h1>
            <p className="text-xs">
              Kindly provide the required information to get matched with
              suitable conditions
            </p>

            <form>
              <label
                htmlFor="Title"
                className="text-blue text-sm font-bold leading-tight tracking-normal"
              >
                Job Title
              </label>
              <input
                id="name"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Software Engineer"
              />
              <label
                htmlFor="Company"
                className="text-blue text-sm font-bold leading-tight tracking-normal"
              >
                Company Name
              </label>
              <input
                id="name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Accenture"
              />
              <label
                htmlFor="Location"
                className="text-blue text-sm font-bold leading-tight tracking-normal"
              >
                Location
              </label>
              <input
                id="name"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Lagos, Nigeria"
              />
              <label
                htmlFor="type"
                className="text-blue text-sm font-bold leading-tight tracking-normal"
              >
                What type of employment is it?
              </label>
              <div className="relative mb-5 mt-2">
                <select
                  id="cvc"
                  className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="MM/YY"
                >
                  <option disabled>select</option>
                  <option
                    value={fullTime}
                    onChange={(e) => setFullTime(e.target.value)}
                    class="py-1"
                  >
                    Full Time
                  </option>
                  <option
                    value={partTime}
                    onChange={(e) => setPartTime(e.target.value)}
                    class="py-1"
                  >
                    Part Time
                  </option>
                  <option
                    value={contract}
                    onChange={(e) => setContract(e.target.value)}
                    class="py-1"
                  >
                    Contract
                  </option>
                </select>
              </div>
              <label
                htmlFor="Salary"
                className="text-blue text-sm font-bold leading-tight tracking-normal"
              >
                Salary range
              </label>

              <div className="relative mb-5 mt-2">
                <input
                  id="email2"
                  className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-4 text-sm border-gray-300 rounded border"
                  placeholder="$4k-$8k"
                />
              </div>
              <label
                htmlFor="Submission"
                className="text-blue text-sm font-bold leading-tight tracking-normal"
              >
                Submission deadline
              </label>
              <div className="relative mb-5 mt-2">
                <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-calendar-event"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x={4} y={5} width={16} height={16} rx={2} />
                    <line x1={16} y1={3} x2={16} y2={7} />
                    <line x1={8} y1={3} x2={8} y2={7} />
                    <line x1={4} y1={11} x2={20} y2={11} />
                    <rect x={8} y={15} width={2} height={2} />
                  </svg>
                </div>
                <input
                  id="expiry"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder=""
                />
              </div>
              <label
                htmlFor="sector"
                className="text-blue text-sm font-bold leading-tight tracking-normal"
              >
                What sector is this job categorized under?
              </label>
              <div className="relative mb-5 mt-2">
                <select
                  id="cvc"
                  className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="MM/YY"
                >
                  <option disabled>select</option>
                  <option
                    value={technology}
                    onChange={(e) => setTechnology(e.target.value)}
                    class="py-1"
                  >
                    Technology
                  </option>
                  <option
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    class="py-1"
                  >
                    Business
                  </option>
                  <option
                    value={growthMarket}
                    onChange={(e) => setGrowthMarket(e.target.value)}
                    class="py-1"
                  >
                    Growth and Marketing
                  </option>
                </select>
              </div>
            </form>
            <div className="flex items-center justify-center ">
              <button className="focus:outline-none hover:bg-blue bg-blue rounded text-white px-8 py-2 text-sm w-full">
                Submit Application
              </button>
            </div>
            <div
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
              onClick={() => setShowModal(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Close"
                className="icon icon-tabler icon-tabler-x"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
