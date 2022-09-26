
import './App.css';

function App() {


 const addVideo = async() => {
    await fetch("http://localhost:3000/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
  };
  addVideo()

const viewvideos = async() => {
  await fetch("http://localhost:3000/videos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
};
viewvideos()


const editVideo = async(id) => {
  await fetch(`http://localhost:3000/videos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    }
  });
};
editVideo()


const deleteVideo = async(id) => {
  await fetch(`http://localhost:3000/videos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    }
  });
};
deleteVideo()
};

export default App;
