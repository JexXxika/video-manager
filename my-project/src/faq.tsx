import React, { useState } from "react";
import "./faq.css"; 


const accordionData = [
  {
    id: "accordion-example-heading-1",
    title: "Accordion Item 1",
    content: "Content for accordion item 1",
  },
  {
    id: "accordion-example-heading-2",
    title: "Accordion Item 2",
    content: "Content for accordion item 2",
  },
  {
    id: "accordion-example-heading-3",
    title: "Accordion Item 3",
    content: "Content for accordion item 3",
  },
];

const Accordion = () => {
  const [activeIds, setActiveIds] = useState([]); // Start with no items open

  const toggleItem = (id) => {
    setActiveIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="accordion-container max-w-6xl mx-auto">
      <p>FAQ</p>
      {accordionData.map(({ id, title, content }) => (
        <div key={id} className="accordion-item">
          <button
            onClick={() => toggleItem(id)}
            className={
              activeIds.includes(id)
                ? "accordion-button active"
                : "accordion-button"
            }
          >
            <span className="accordion-icon">
              {activeIds.includes(id) ? "-" : "+"}
            </span>
            <span className="accordion-title">{title}</span>
          </button>
          {activeIds.includes(id) && (
            <div className="accordion-content">{content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
