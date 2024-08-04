import { useState } from "react";
import "./Profile.css";

function Profile() {
  let [theme, setTheme] = useState({
    bgColor: "white",
    textColor: "black",
  });

  let [name, setName] = useState("Kalyan");

  let [image, setImage] = useState(
    "https://imgs.search.brave.com/iaMNNgy2ECVULB9Hz5tGnAA6tgzmjYtLypKxPdbuIZk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvcGF3YW4ta2Fs/eWFuLTBtZGYxOTcw/N2V1amtqMDYuanBn"
  );

  const changeTheme = (event) => {
    if (event.target.checked) {
      setTheme({
        bgColor: "black",
        textColor: "white",
      });
    } else {
      setTheme({
        bgColor: "white",
        textColor: "black",
      });
    }
  };
  const changeToRohan = () => {
    setName("Kalyan");
    setImage(
      "https://imgs.search.brave.com/iaMNNgy2ECVULB9Hz5tGnAA6tgzmjYtLypKxPdbuIZk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvcGF3YW4ta2Fs/eWFuLTBtZGYxOTcw/N2V1amtqMDYuanBn"
    );
  };
  const changeToSonal = () => {
    setName("Ruhani Sharma");
    setImage(
      "https://imgs.search.brave.com/mkwAKnxkJ0twugd8zYgIrQpJzpkVwxUYDsJiWxqC5D8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci82MTMv/MzAvSEQtd2FsbHBh/cGVyLXJ1aGFuaS1z/aGFybWEtbW9kZWwt/c2FyZWUtbG92ZXIu/anBn"
    );
  };

  return (
    <div className="profileContainer">
      <div className="imageCol">
        <img src={image} width="100%" height={430} />
      </div>
      <div
        className="contentCol"
        style={{ backgroundColor: theme.bgColor, color: theme.textColor }}
      >
        <dl>
          <dt>User Name</dt>
          <dd>{name}</dd>
          <dt>Email ID</dt>
          <dd>xyz@gmail.com</dd>
          <dt>Gender</dt>
          <dd>Male</dd>
          <dt>Description</dt>
          <dd>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            eos tempora temporibus cumque similique quae labore quis eum illo
            inventore omnis ipsa eius possimus, qui facilis adipisci aut
            obcaecati veniam?
          </dd>
        </dl>
        <button
          onClick={changeToRohan}
          className="btn btn-outline-success mx-4"
        >
          Kalyan
        </button>
        <button onClick={changeToSonal} className="btn btn-outline-primary">
          Ruhani Sharma
        </button>
        <br />
        <br />
        <input type="checkbox" className="mx-2" onChange={changeTheme} />
        Check to Switch Dark Mode
      </div>
    </div>
  );
}

export default Profile;
