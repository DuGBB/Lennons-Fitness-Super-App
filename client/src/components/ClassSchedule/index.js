import React from "react";
import { Link } from "react-router-dom";

const ClassList = ({ exerciseClasses, exClassName }) => {
  if (!exerciseClasses.length) {
    return <h3>No Classes Yet</h3>;
  }

  return (
    <div>
      <h3>{exClassName}</h3>
      {exerciseClasses &&
        exerciseClasses.map((excerciseClass) => (
          <div key={excerciseClass._id}>
            <p>exerciseClass on {excerciseClass.createdAt}</p>
            <div>
              <p>{excerciseClass.location}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ClassList;

// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

// const ClassSchedule = ({ exerciseClasses, location }) => {
//   //   if (!exerciseClasses.length) {
//   //     return <h3>No Classes Available</h3>;
//   //   }

//   return (
//     <div>
//       <h3>{location}</h3>
//       {exerciseClasses &&
//         exerciseClasses.map((exerciseClass) => (
//           <div key={exerciseClass._id}>
//             <p>
//               <Link to={`/class`}>{exerciseClass.name}</Link> class at{" "}
//               {exerciseClass.location}
//             </p>
//           </div>
//         ))}
//     </div>
//   );
// };

// import React from 'react';

// function ClassSchedule (){

//     const handleClassSubmit = (e) => {
//         e.preventDefault();
//       };

//     return (
//         <section className="container">
//             <h2>Sign Up For Classes!</h2>
//             <div className="d-flex row justify-content-center">
//             <button onClick={handleClassSubmit} className="btn col-md border w-75 m-1" type="submit" id="yogaBtn">Yoga</button>
//             <button onClick={handleClassSubmit} className="btn col-md border w-75 m-1" type="submit" id="spinBtn">Spin</button>
//             <button onClick={handleClassSubmit} className="btn col-md border w-75 m-1" type="submit" id="KbBtn">Kick Boxing</button>
//             </div>
//         </section>
//     )
// }

// export default ClassSchedule;
