"use client";

import { useEffect } from "react";

const GymPricingModal = ({ isOpen, onClose, plan }) => {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !plan) return null;

  const closeModal = () => onClose();

  return (
    <>
      <div
        style={{
          ...overlayStyle,
          visibility: isOpen ? "visible" : "hidden",
          opacity: isOpen ? 1 : 0,
        }}
        onClick={closeModal}
      >
        <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
          <button onClick={closeModal} style={closeButtonStyle}>
            ×
          </button>
          <div style={modalBodyStyle}>
            <h3 style={titleStyle}>{plan.title}</h3>
            <p style={priceStyle}>{plan.price}</p>

            {plan.description?.map((paragraph, index) => (
              <p key={`${plan.title}-desc-${index}`} style={paragraphStyle}>
                {paragraph}
              </p>
            ))}

            {plan.sections?.map((section) => (
              <div key={`${plan.title}-${section.title}`} style={sectionStyle}>
                <h4 style={sectionTitleStyle}>{section.title}</h4>
                <ul style={listStyle}>
                  {section.items.map((item, index) => (
                    <li key={`${section.title}-${index}`} style={listItemStyle}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// Styles

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1008,
  transition: "0.4s",
};

const modalStyle = {
  position: "relative",
  width: "90%",
  maxWidth: "860px",
  backgroundColor: "#fff",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
};

const closeButtonStyle = {
  position: "absolute",
  top: "12px",
  right: "25px",
  fontSize: "28px",
  background: "transparent",
  border: "none",
  color: "#1e293b",
  cursor: "pointer",
  zIndex: 1001,
};

const modalBodyStyle = {
  padding: "32px 28px 24px",
  maxHeight: "85vh",
  overflowY: "auto",
};

const titleStyle = {
  fontSize: "1.6rem",
  lineHeight: 1.2,
  marginBottom: "8px",
  color: "#0f172a",
};

const priceStyle = {
  fontSize: "1.1rem",
  fontWeight: 700,
  color: "#007984",
  marginBottom: "18px",
};

const paragraphStyle = {
  marginBottom: "12px",
  color: "#334155",
  lineHeight: 1.6,
};

const sectionStyle = {
  marginTop: "14px",
};

const sectionTitleStyle = {
  marginBottom: "8px",
  fontSize: "1.05rem",
  color: "#0f172a",
};

const listStyle = {
  margin: 0,
  paddingLeft: "20px",
  listStyle: "disc",
};

const listItemStyle = {
  marginBottom: "8px",
  color: "#334155",
  lineHeight: 1.5,
};

export default GymPricingModal;
