import { use, useState } from "react";
import "./App.css";

const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Velit ullam voluptas pariatur fuga dignissimos asperiores officia. Et non tempora voluptatem harum sed minus. Quaerat debitis quo praesentium voluptas officia. Quaerat.",
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, repellendus minus sunt praesentium iusto laudantium necessitatibus consequuntur officiis tempora iure eos obcaecati magnam labore ipsam illo reiciendis, atque quia debitis.",
  },
  {
    summary: "We think of props as the component API",
    details:
      "Veniam quia ea voluptas minus corrupti quae nesciunt quidem recusandae delectus vero! Doloremque, exercitationem fugit recusandae dolores atque tenetur! Nostrum, esse quo",
  },
];

export default function App() {
  return (
    <div className="app">
      <Tabbed content={content} />
    </div>
  );
}

function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  function handleActiveTab(id) {
    setActiveTab(id);
  }

  return (
    <>
      <ul className="tabs">
        <TabButton num={0} activeTab={activeTab} onClick={handleActiveTab} />
        <TabButton num={1} activeTab={activeTab} onClick={handleActiveTab} />
        <TabButton num={2} activeTab={activeTab} onClick={handleActiveTab} />
        <TabButton num={3} activeTab={activeTab} onClick={handleActiveTab} />
      </ul>
      {activeTab <= 2 ? (
        <TabContent content={content.at(activeTab)} />
      ) : (
        <DifferentContent />
      )}
    </>
  );
}

// function TabContent({ content }) {
//   const [showDetails, setShowDetails] = useState(true);
//   const [likes, setLikes] = useState(0);

//   function handleShowDetails() {
//     setShowDetails((prev) => !prev);
//   }
//   return (
//     <div className="tab-content">
//       <h4 className="tab-summary">{content.summary}</h4>
//       {showDetails && <p className="tab-details">{content.details}</p>}

//       <div className="tab-actions">
//         <button onClick={handleShowDetails}>
//           {showDetails ? "Hide" : "Show"} details
//         </button>
//         <div className="hearts-rating">
//           <span>{likes} ❤</span>
//           <button onClick={() => setLikes((likes) => likes + 1)}>+</button>
//           <button>++++</button>
//         </div>
//       </div>

//       <div className="tab-undos">
//         <button>Undo</button>
//         <button>Undo in 2s</button>
//       </div>
//     </div>
//   );
// }

// function TabButton({ num, activeTab, onClick }) {
//   return (
//     <li
//       className={activeTab === num ? "active-tab" : ""}
//       onClick={() => onClick(num)}
//     >
//       Tab {num + 1}
//     </li>
//   );
// }

// function DifferentContent() {
//   return (
//     <div className="tab-content">
//       <h4 className="tab-summary">This Tab is totally a DifferentContent</h4>
//       <p>If you are seeing this that means this component is working</p>
//     </div>
//   );
// }
