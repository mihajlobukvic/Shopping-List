import { useState } from "react";
import Body from "./Body";
import Header from "./Header";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const [Checked, setChecked] = useState({});

  function handleDelete(indexToDelete) {
    setItems(items.filter((_, index) => index !== indexToDelete));
  }

  function handleChecked(index) {
    setChecked((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  }

  function handleInputChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleButtonClick() {
    if (searchTerm.trim() !== "") {
      setItems([...items, searchTerm]);
      setSearchTerm("");
    }
  }

  return (
    <div>
      <Header
        naslov="Shopping list"
        click="Add"
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
        handleButtonClick={handleButtonClick}
      />
      <Body
        items={items}
        handleChecked={handleChecked}
        Checked={Checked}
        handleDelete={handleDelete}
      />
    </div>
  );
}
