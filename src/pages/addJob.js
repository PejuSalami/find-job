import React, { useState, useEffect } from "react";
import AddJobIcon from "./icon";
import "./table.css";
import { BsSearch } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { BsFunnel } from "react-icons/bs";
// import { getData } from '../services/jobs';
import "./header.css";
import LogoFindJob from "../images/LogoFindJob.png";
import ellipse from "../images/ellipse.png";
//import Header from "./header";
import "../App.css";

import Index from "./addJobForm";

/* This example requires Tailwind CSS v2.0+ */
// const people = [
//   {
//     job: 'Customer success intern',
//     date: '12/7/21',
//     candidates: '50',
//     role: 'Admin',
//     email: 'Customer success intern',
//     image: <AddJobIcon />,
//   },

//   {
//     job: 'Customer success intern',
//     date: '12/7/21',
//     candidates: '50',
//     role: 'Admin',
//     email: 'Customer success intern',
//     image: <AddJobIcon />,
//   },
//   {
//     job: 'Customer success intern',
//     date: '12/7/21',
//     candidates: '50',
//     role: 'Admin',
//     email: 'Customer success intern',
//     image: <AddJobIcon />,
//   },
//   {
//     job: 'Customer success intern',
//     date: '12/7/21',
//     candidates: '50',
//     role: 'Admin',
//     email: 'Customer success intern',
//     image: <AddJobIcon />,
//   },
//   {
//     job: 'Customer success intern',
//     date: '12/7/21',
//     candidates: '50',
//     role: 'Admin',
//     email: 'Customer success intern',
//     image: <AddJobIcon />,
//   },
//   // More people...
// ]

export default function AddJob() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [loading, setLoading] = useState(false);

  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2),
      year = ("0" + date.getFullYear()).slice(-2);
    return [mnth, day, year].join("/");
  }

  console.log(
    convert("Thu Jun 09 2011 00:00:00 GMT+0530 (India Standard Time)")
  );

  async function getJobs() {
    const url = "/jobs";
    setLoading(true);
    try {
      let res = await fetch(url);
      const result = await res.json();
      setData(result.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getJobs();
  }, []);

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <div className="App">
      <div className=" header-cont flex">
        <div className="Header">
          <img src={LogoFindJob} className="find-logo" alt="Logo" /> <br />
          <h1 className="header-txt">Jobs</h1>
        </div>

        <img className="header-right" src={ellipse} alt="Logo" />
      </div>

      <div className="flex flex-col">
        <div class=" bg-gray-200 py-9">
          <div className="flex w-full ">
            <div className="relative drop-shadow-lg">
              <div className="absolute top-4 left-3">
                {" "}
                <BsSearch className="text-blue z-20 hover:text-blue" />{" "}
              </div>{" "}
              <input
                type="text"
                className="h-11 w-96 pl-10 pr-20 rounded-md z-0 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
              <div className="absolute top-1.5 right-2">
                {" "}
                <button className="h-8 w-24 text-white rounded-lg bg-red hover:bg-red">
                  Search
                </button>{" "}
              </div>
            </div>
            <div className="newJob-cont flex justify-end drop-shadow-lg">
              {" "}
              <button
                className="h-10 w-20 newJob-txt text-white flex rounded-lg bg-red hover:bg-red"
                onClick={() => setShowModal(true)}
              >
                <BsPlus />
                New Job
              </button>{" "}
            </div>
            {showModal ? <Index setShowModal={setShowModal} /> : null}
          </div>
        </div>
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue ">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Job title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date modified
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Candidates
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only sm:not-sr-only flex">
                        Filter
                        <BsFunnel />
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 drop-shadow-md rounded-md">
                  {data.map((item) => (
                    <tr className="drop-shadow-md h-9" key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <svg>
                              {" "}
                              <AddJobIcon />
                            </svg>
                          </div>
                          <div className="ml-4">
                            {/* <div className="text-sm font-medium text-gray-900">{person.name}</div> */}
                            <div className="text-sm text-gray-500">
                              {item.title}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {convert(item.created_at)}
                        </div>
                        {/* <div className="text-sm text-gray-500">{person.candidates}</div> */}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          50
                        </span>
                      </td>
                      {/* <td className="px-6 py-4  whitespace-nowrap text-sm text-gray-500">{person.role}</td> */}
                      <td className="px-6 py-4 table-link whitespace-nowrap text-sm font-medium">
                        <a href="#">Edit</a>
                      </td>
                      <td className="px-6 py-4 table-link whitespace-nowrap text-sm font-medium">
                        <a href="#">Delete</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
