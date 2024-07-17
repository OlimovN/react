import React,{useState} from "react";
import "./App.css";


const  = () => {
  const images = [
    { id: 1, src:{ https://picsum.photos/id/237/200/300
    },  },
    { id: 2, src: {https://picsum.photos/seed/picsum/200/300
    },  },
    { id: 3, src:{ https://picsum.photos/200/300?grayscale
    },  },
    { id: 4, src: {https://picsum.photos/200/300/?blur
    },  },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery">
      <div className="thumbnail-container">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            onClick={() => setSelectedImage(image.src)}
            className="thumbnail"
          />
        ))}
      </div>
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Selected" />
        </div>
      )}
    </div>
  );
};


// const App = () => {
//   const [progress, setProgress] = useState(0);

//   const actions = [
//     { type: 'increase', label: 'Increase', handler: () => setProgress(prev => Math.min(prev + 10, 100)) },
//     { type: 'decrease', label: 'Decrease', handler: () => setProgress(prev => Math.max(prev - 10, 0)) }
//   ];

//   return (
//     <div className="progress-bar-container">
//       <div className="progress-bar" style={{ width: `${progress}%` }}></div>
//       <div className="progress-actions">
//         {actions.map(action => (
//           <button key={action.type} onClick={action.handler}>
//             {action.label}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };



// const App = () => {
//   const games = [
//     "Chess",
//     "VOleyball",
//     "Basketball",
//     "Football",
//     "Tennis",
//     "criket",
//   ];

//   const [selectedGame, setSelectedGame] = useState("");

//   const pickRandomGame = () => {
//     const randomIndex = Math.floor(Math.random() * games.length);
//     setSelectedGame(games[randomIndex]);
//   };

//   return (
//     <div className="game-picker">
//       <button className="pick-button" onClick={pickRandomGame}>
//         Pick Game
//       </button>
//       {selectedGame && <div className="game-name">{selectedGame}</div>}
//     </div>
//   );
// };

// const App = () => {
//   const [counts, setCounts] = useState({ likes: 0, dislikes: 0 });

//   const handleAction = (type) => {
//     setCounts((prevCounts) => ({
//       ...prevCounts,
//       [type]: prevCounts[type] + 1,
//     }));
//   };

//   const actions = [
//     { type: "likes", label: "Like", className: "like-button" },
//     { type: "dislikes", label: "Dislike", className: "dislike-button" },
//   ];

//   return (
//     <div className="post">
//       <div className="post-content">
//         <p>This is a social media post content.</p>
//       </div>
//       <div className="post-actions">
//         {actions.map((action) => (
//           <button
//             key={action.type}
//             className={action.className}
//             onClick={() => handleAction(action.type)}
//           >
//             {action.label} {counts[action.type]}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };


// const App = () => {
//   const [activeTab, setActiveTab] = useState("tab1");

//   const tabs = [
//     { id: "tab1", label: "Tab 1", content: "Tab 1 Content" },
//     { id: "tab2", label: "Tab 2", content: "Tab 2 Content" },
//     { id: "tab3", label: "Tab 3", content: "Tab 3 Content" },
//   ];

//   return (
//     <div className="tabs">
//       <div className="tab-buttons">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
//             onClick={() => setActiveTab(tab.id)}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>
//       <div className="tab-content">
//         {tabs.map(
//           (tab) => activeTab === tab.id && <div key={tab.id}>{tab.content}</div>
//         )}
//       </div>
//     </div>
//   );
// };



// function App() {
//   const [countState, setCountState] = useState(0);
//   let count = 0;
//   function handleIncrement() {
//     setCountState(countState + 1);
//   }

//   function handleDecrement() {
//     setCountState(countState - 1);
//   }
//   return (
//     <div>
//       <h1 className="count">{countState}</h1>
//       <button onClick={(handleIncrement)}>Increment</button>
//       <button onClick={(handleDecrement)}>Decrement</button>
//     </div>
//   );
// }

export default App;