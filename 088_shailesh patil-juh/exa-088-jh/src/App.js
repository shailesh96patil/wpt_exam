import { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  return (
    <>
      <Component />
      <div></div>
    </>
  );
}

function Component() {
  const [title, settitle] = useState("MyChatApp");
  const [stdid, setstdid] = useState("088_JH");
  const [name, setname] = useState("shailesh");
  const [message, setmessage] = useState("");
  const [messageList, setmessageList] = useState([]);

  const processMessage = (e) => {
    const newMessage = e.target.value;
    setmessage(newMessage);
  };

  const addmessage = () => {
    console.log(message);
    const newMessageList = [message, ...messageList];
    setmessageList(newMessageList);
    setmessage("");
  };

  return (
    <>
      <div
        className="container-fluid row bg-dark m-0 p-0 align-items-center"
        style={{ height: "60px" }}
      >
        <div className="col">
          <div>
            <span
              className="fw-bold text-light col-5"
              style={{ fontSize: "25px" }}
            >
              {title}
            </span>
            <span className="text-light " style={{ fontSize: "15px" }}>
              {" "}
              by {name}
            </span>
            <span className="text-light " style={{ fontSize: "15px" }}>
              {" "}
              id:{stdid}
            </span>
          </div>
        </div>
      </div>
      <div className="container m-0 p-0 mt-3 ">
        <div className="w-100">
          <input
            className=""
            style={{ width: "70vw" }}
            type="text"
            placeholder="lets chat here"
            value={message}
            onChange={processMessage}
          />

          <input
            className="me-2"
            style={{ width: "20vw" }}
            type="button"
            value="send"
            onClick={addmessage}
          />
        </div>
      </div>

      {messageList.map((item, index) => {
        <div key={index}>{item}</div>;
      })}
    </>
  );
}
