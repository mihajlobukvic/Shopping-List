import { useState } from "react";

export default function Body({ items, handleChecked, Checked, handleDelete }) {
  const [quantities, setQuantities] = useState({});

  function handleIncrease(index) {
    setQuantities((prev) => ({
      ...prev,
      [index]: (prev[index] || 1) + 1,
    }));
  }

  function handleDecrease(index) {
    setQuantities((prev) => {
      const current = prev[index] || 1;
      if (current > 1) {
        return { ...prev, [index]: current - 1 };
      }
      return prev;
    });
  }

  return (
    <div className="list2">
      {items.length === 0 ? (
        <p className="list3">Your list is empty.</p>
      ) : (
        <ul className="lista">
          {items.map((item, index) => {
            const currentQuantity = quantities[index] || 1;

            return (
              <li key={index}>
                <input
                  type="checkbox"
                  className="cekiranje"
                  checked={Checked[index] || false}
                  onChange={() => handleChecked(index)}
                />
                <span
                  style={{
                    textDecoration: Checked[index] ? "line-through" : "none",
                  }}
                >
                  {item}
                </span>
                <div className="stavke">
                  <button onClick={() => handleDecrease(index)}>-</button>
                  <p>{currentQuantity}</p>
                  <button onClick={() => handleIncrease(index)}>+</button>

                  <button
                    className="dugme123"
                    onClick={() => handleDelete(index)}
                  >
                    X
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p className="napomena">
        {Object.values(Checked).filter(Boolean).length} of {items.length} bought
      </p>
    </div>
  );
}
