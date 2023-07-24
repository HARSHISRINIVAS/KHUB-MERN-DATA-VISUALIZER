// // // import React, { useState } from 'react';
// // // import * as XLSX from 'xlsx';
// // // import Dropzone from 'react-dropzone';
// // // import Plot from 'react-plotly.js';
// // // import './App.css';

// // // function App() {
// // //   const [uploadedFile, setUploadedFile] = useState(null);
// // //   const [filteredData, setFilteredData] = useState(null);

// // //   const handleFileUpload = (acceptedFiles) => {
// // //     const file = acceptedFiles[0];
// // //     setUploadedFile(file);

// // //     const reader = new FileReader();
// // //     reader.onload = function (e) {
// // //       const data = new Uint8Array(e.target.result);
// // //       const workbook = XLSX.read(data, { type: 'array' });
// // //       const firstSheet = workbook.SheetNames[0];
// // //       const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet]);

// // //       const filteredData = excelData.filter((item) => !Object.values(item).every((value) => value === null));

// // //       setFilteredData(filteredData);
// // //     };
// // //     reader.readAsArrayBuffer(file);
// // //   };

// // //   const renderPieChart = () => {
// // //     if (filteredData) {
// // //       const columns = Object.keys(filteredData[0]);

// // //       const pieTrace = {
// // //         labels: columns,
// // //         values: columns.map((column) => filteredData.length),
// // //         type: 'pie',
// // //         name: 'Pie Chart',
// // //       };

// // //       return (
// // //         <div className="chart-item">
// // //           <h2>Pie Chart</h2>
// // //           <Plot data={[pieTrace]} layout={{ title: 'Pie Chart' }} />
// // //         </div>
// // //       );
// // //     }
// // //   };

// // //   return (
// // //     <div className="container">
// // //       <h1 className="title">
// // //         <span style={{ color: 'black' }}>Project-</span>
// // //         <span style={{ color: 'red', border: '1px solid black', padding: '0 5px', backgroundColor: 'black' }}>
// // //           K-Hub
// // //         </span>
// // //       </h1>
// // //       <Dropzone onDrop={handleFileUpload}>
// // //         {({ getRootProps, getInputProps }) => (
// // //           <div {...getRootProps()} className="dropzone">
// // //             <input {...getInputProps()} />
// // //             <p>Choose &submit file</p>
// // //             {uploadedFile && (
// // //               <p className="file-info">
// // //                 <b>Your File is being analyzed:</b>: {uploadedFile.name}
// // //               </p>
// // //             )}
// // //           </div>
// // //         )}
// // //       </Dropzone>
// // //       {filteredData && renderPieChart()}
// // //     </div>
// // //   );
// // // }

// // // export default App;

// // import React, { useState } from 'react';
// // import * as XLSX from 'xlsx';
// // import Dropzone from 'react-dropzone';
// // import Plot from 'react-plotly.js';
// // import './App.css';

// // function App() {
// //   const [uploadedFile, setUploadedFile] = useState(null);
// //   const [filteredData, setFilteredData] = useState(null);

// //   const handleFileUpload = (acceptedFiles) => {
// //     const file = acceptedFiles[0];
// //     setUploadedFile(file);

// //     const reader = new FileReader();
// //     reader.onload = function (e) {
// //       const data = new Uint8Array(e.target.result);
// //       const workbook = XLSX.read(data, { type: 'array' });
// //       const firstSheet = workbook.SheetNames[0];
// //       const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet]);

// //       const filteredData = excelData.filter((item) => !Object.values(item).every((value) => value === null));

// //       setFilteredData(filteredData);
// //     };
// //     reader.readAsArrayBuffer(file);
// //   };

// //   const renderPieChart = () => {
// //     if (filteredData) {
// //       const columns = Object.keys(filteredData[0]);

// //       const pieTrace = {
// //         labels: columns,
// //         values: columns.map((column) => filteredData.length),
// //         type: 'pie',
// //         name: 'Pie Chart',
// //       };

// //       return (
// //         <div className="chart-item">
// //           <h2>Pie Chart</h2>
// //           <Plot data={[pieTrace]} layout={{ title: 'Pie Chart' }} />
// //         </div>
// //       );
// //     }
// //   };

// //   return (
// //     <div className="container">
// //       <h1 className="main-heading">KHUB PROJECT</h1>
// //       <h2 className="sub-title">Import Excel Data</h2>
// //       <Dropzone onDrop={handleFileUpload}>
// //         {({ getRootProps, getInputProps }) => (
// //           <div {...getRootProps()} className="dropzone">
// //             <input {...getInputProps()} />
// //             <p>Choose &submit file</p>
// //             {uploadedFile && (
// //               <p className="file-info">
// //                 <b>Your File is being analyzed:</b>: {uploadedFile.name}
// //               </p>
// //             )}
// //           </div>
// //         )}
// //       </Dropzone>
// //       {filteredData && renderPieChart()}
// //     </div>
// //   );
// // }

// // export default App;




// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';
// import Dropzone from 'react-dropzone';
// import Plot from 'react-plotly.js';
// import './App.css';

// function App() {
//   const [uploadedFile, setUploadedFile] = useState(null);
//   const [filteredData, setFilteredData] = useState(null);

//   const handleFileUpload = (acceptedFiles) => {
//     const file = acceptedFiles[0];
//     setUploadedFile(file);

//     const reader = new FileReader();
//     reader.onload = function (e) {
//       const data = new Uint8Array(e.target.result);
//       const workbook = XLSX.read(data, { type: 'array' });
//       const firstSheet = workbook.SheetNames[0];
//       const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet]);

//       const filteredData = excelData.filter((item) => !Object.values(item).every((value) => value === null));

//       setFilteredData(filteredData);
//     };
//     reader.readAsArrayBuffer(file);
//   };

//   const renderPieChart = () => {
//     if (filteredData) {
//       const columns = Object.keys(filteredData[0]);

//       const pieTrace = {
//         labels: columns,
//         values: columns.map((column) => filteredData.length),
//         type: 'pie',
//         name: 'Pie Chart',
//       };

//       return (
//         <div className="chart-item">
//           <h2>Pie Chart</h2>
//           <Plot data={[pieTrace]} layout={{ title: 'Pie Chart' }} />
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="container">
//       <div className="left-side">
//         <h2 className="sub-title">Import Excel Data</h2>
//         <Dropzone onDrop={handleFileUpload}>
//           {({ getRootProps, getInputProps }) => (
//             <div {...getRootProps()} className="dropzone">
//               <input {...getInputProps()} />
//               <p>Choose &submit file</p>
//               {uploadedFile && (
//                 <p className="file-info">
//                   <b>Your File is being analyzed:</b>: {uploadedFile.name}
//                 </p>
//               )}
//             </div>
//           )}
//         </Dropzone>
//       </div>
//       <div className="right-side">
//         {filteredData && renderPieChart()}
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import Dropzone from 'react-dropzone';
import Plot from 'react-plotly.js';
import './App.css';

function App() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  const handleFileUpload = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);

    const reader = new FileReader();
    reader.onload = function (e) {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheet = workbook.SheetNames[0];
      const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet]);

      const filteredData = excelData.filter((item) => !Object.values(item).every((value) => value === null));

      setFilteredData(filteredData);
    };
    reader.readAsArrayBuffer(file);
  };

  const renderPieChart = () => {
    if (filteredData) {
      const columns = Object.keys(filteredData[0]);

      const pieTrace = {
        labels: columns,
        values: columns.map((column) => filteredData.length),
        type: 'pie',
        name: 'Pie Chart',
      };

      return (
        <div className="chart-item">
          <h2>Pie Chart</h2>
          <Plot data={[pieTrace]} layout={{ title: 'Pie Chart' }} />
        </div>
      );
    }
  };

  return (
    <div className="container">
      <h1 className="main-heading">KHUB PROJECT</h1>
      <div className="left-side">
        <h2 className="sub-title">Import Excel Data</h2>
        <Dropzone onDrop={handleFileUpload}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              <p>Choose &submit file</p>
              {uploadedFile && (
                <p className="file-info">
                  <b>Your File is being analyzed:</b>: {uploadedFile.name}
                </p>
              )}
            </div>
          )}
        </Dropzone>
      </div>
      <div className="right-side">
        {filteredData && renderPieChart()}
      </div>
    </div>
  );
}

export default App;
