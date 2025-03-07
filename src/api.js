import axios from "axios";

const API_URL = "YOUR_APPS_SCRIPT_URL";
// api.js - Dummy Data

const projects = [
  {
    id: 1,
    name: "Project A",
    folders: [
      { id: 101, name: "Proposals & Acct", selected: true, status: "red" },
      { id: 102, name: "PM & Schedules", selected: true, status: "amber" },
      { id: 103, name: "Design Review", selected: false, status: "green" },
    ],
  },
  {
    id: 2,
    name: "Project B",
    folders: [
      { id: 201, name: "Onboarding", selected: true, status: "green" },
      { id: 202, name: "Safety", selected: false, status: "red" },
      { id: 203, name: "Project Mgmt", selected: true, status: "amber" },
    ],
  },
];

//Simulating an API call
export const getFolders = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projects);
    }, 500); // Simulating delay
  });
};

// export const getFolders = async () => {
//   return [
//     {
//       id: 1,
//       name: "Project A",
//       folders: [
//         { id: 101, name: "Proposals & Acct", status: "green" },
//         { id: 102, name: "PM & Schedules", status: "amber" },
//         { id: 103, name: "Design Review", status: "green" },
//         { id: 104, name: "Construction Docs", status: "green" },
//         { id: 105, name: "Submittals & O&M", status: "green" },
//       ],
//     },
//     {
//       id: 2,
//       name: "Project B",
//       folders: [
//         { id: 201, name: "Onboarding", status: "red" },
//         { id: 202, name: "Safety", status: "amber" },
//         { id: 203, name: "Project Mgmt", status: "green" },
//         { id: 204, name: "NFPA 70E", status: "green" },
//         { id: 205, name: "OSHA", status: "green" },
//       ],
//     },
//   ];
// };

// export const saveFolders = async (folders) => {
//   await axios.post(API_URL, folders);
// };
