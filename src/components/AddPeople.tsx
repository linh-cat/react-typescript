import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        name: string;
        age: number;
        url: string;
        note?: string | undefined;
      }[]
    >
  >;
}
const AddPeople: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    img: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (!input.name || !input.age || !input.img) {
      window.alert("Input not empty");
      return;
    }
    setPeople([
      ...people,
      {
        id: Math.random(),
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);
    setInput({
      name: "",
      age: "",
      img: "",
      note: "",
    });
  };

  return (
    <form className="AddToList" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        name="name"
        onChange={handleChange}
        value={input.name}
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        name="age"
        onChange={handleChange}
        value={input.age}
      />
      <input
        type="text"
        placeholder="Image"
        className="AddToList-input"
        name="img"
        onChange={handleChange}
        value={input.img}
      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        name="note"
        onChange={handleChange}
        value={input.note}
      />
      <button type="submit" className="AddToList-btn">
        Add To List
      </button>
    </form>
  );
};

export default AddPeople;
