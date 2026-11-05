export default function Header({
  naslov,
  handleInputChange,
  searchTerm,
  handleButtonClick,
}) {
  return (
    <div className="header1">
      <h1 className="title1">{naslov}</h1>
      <div className="elements">
        <input
          className="type1"
          type="text"
          placeholder="e.g. Milk"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="click1" onClick={handleButtonClick}>
          Add
        </button>
      </div>
    </div>
  );
}
