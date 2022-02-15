import React, { useState } from "react";
import "./App.css";
import AddPeople from "./components/AddPeople";
import List from "./components/List";

export interface IState {
  people: {
    id: number;
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      id: 1,
      name: "mr Tung",
      age: 30,
      url: "https://yt3.ggpht.com/ytc/AKedOLRkY5n3Hd-EXXEpeUPp4INtDJTT_awisaAOhndN1g=s900-c-k-c0x00ffffff-no-rj",
      note: "",
    },

    {
      id: 2,
      name: "mrs Tram",
      age: 28,
      url: "https://vtv1.mediacdn.vn/thumb_w/650/2021/1/26/thieu-bao-tram-dang-anh-xinh-dep-nhung-duom-buon-10-16116295827361159002401-crop-16116322265561934462894.jpg",
      note: "",
    },
  ]);

  return (
    <div className="App">
      <h1>Lists people invited to my party</h1>
      <List people={people} />
      <AddPeople people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
