// import { useContext, useState } from "react";
// import { EventContext } from "../lib/Context";

// export const EventList: React.FC = () => {
//   const context = useContext(EventContext);
//   const [view, setView] = useState<"grid" | "table">("grid");

//   if (!context) {
//     throw new Error("Outside a provider...");
//   }

//   const { state } = context;
//   return (
//     <>
//       <div>
//         <button
//           disabled={view == "grid"}
//           onClick={() => {
//             setView("grid");
//           }}
//         >
//           Grid
//         </button>
//         <button
//           disabled={view == "table"}
//           onClick={() => {
//             setView("table");
//           }}
//         >
//           Table
//         </button>
//       </div>
//       <h1>Event List</h1>
//       <div className="list">
//         {view == "grid" ? (
//           state.events.map((event) => (
//             <div key={event.id}>
//               <img src={event.cover} />
//               <p>{event.title}</p>
//             </div>
//           ))
//         ) : (
//           <table>
//             <thead>
//               <tr>
//                 <th>Event Name</th>
//                 <th>Event Composer</th>
//                 <th>Event date</th>
//                 <th>Event Time</th>
//                 <th>Cover</th>
//               </tr>
//             </thead>
//             <tbody>
//               {state.events.map((event) => (
//                 <tr>
//                   <td>{event.title}</td>
//                   <td>{event.composer}</td>
//                   <td>{event.date}</td>
//                   <td>{event.time}</td>
//                   <td>
//                     <img src={event.cover} alt={event.title} />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </>
//   );
// };

import { useContext, useState } from "react";
import { EventContext } from "../lib/Context";

export const EventList: React.FC = () => {
  const context = useContext(EventContext);
  const [showMethod, setShowMethod] = useState(true);

  if (!context) {
    throw new Error("Outside a provider...");
  }

  const { state } = context;
  return (
    <>
      <div>
        <button
          disabled={showMethod}
          onClick={() => {
            setShowMethod(!showMethod);
          }}
        >
          Grid
        </button>
        <button
          onClick={() => {
            setShowMethod(!showMethod);
          }}
        >
          Table
        </button>
      </div>
      <h1>Event List</h1>
      <div className="list">
        {showMethod == true ? (
          state.events.map((event) => (
            <div key={event.id}>
              <img src={event.cover} />
              <p>{event.title}</p>
            </div>
          ))
        ) : (
          <table>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Event Composer</th>
                <th>Event date</th>
                <th>Event Time</th>
                <th>Cover</th>
              </tr>
            </thead>
            <tbody>
              {state.events.map((event) => (
                <tr>
                  <td>{event.title}</td>
                  <td>{event.composer}</td>
                  <td>{event.date}</td>
                  <td>{event.time}</td>
                  <td>
                    <img src={event.cover} alt={event.title} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};
