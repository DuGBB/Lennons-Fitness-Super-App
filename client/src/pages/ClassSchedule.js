import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import ClassList from "../components/ClassItem";
import ClassSchedule from "../components/ClassSchedule";
import Auth from "../utils/auth";
import { QUERY_CLASSES } from "../utils/queries";

const SingleClass = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_CLASSES);
  const exerciseClasses = data?.exerciseClasses || [];
  console.log(exerciseClasses);
  const loggedIn = Auth.loggedIn();
  return (
    <main>
      <div className={`${loggedIn && "navActive"}`}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ClassSchedule
            exerciseClasses={exerciseClasses}
            title="these are classes"
          />
        )}
      </div>
    </main>
  );
};

// const SingleClass = (props) => {
//   const { id: classId } = useParams();
//   console.log(classId);
//   const { loading, data } = useQuery(QUERY_CLASS, {
//     variables: { id: classId },
//   });

//   const excerciseClass = data?.exerciseClass || {};

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div>
//       HELLO THIS IS WORKING SOMEHOW
//       <div>
//         <p>
//           <span>{excerciseClass.name}</span> thought on{" "}
//           {excerciseClass.location}
//         </p>
//         <div>
//           <p>{excerciseClass.time}</p>
//         </div>
//       </div>{" "}
//     </div>
//   );
// };

export default SingleClass;
