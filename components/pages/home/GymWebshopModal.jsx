"use client";

import { useEffect } from "react";

const WEBSHOP_URL =
  "https://humanusgbr.virtuagym.com/webshop/?club=eFNZRHhzc092SWFwc2lLK3orNElUdz09&embedded=1";

const GymWebshopModal = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(event) => event.stopPropagation()}>
        <button
          onClick={onClose}
          style={closeButtonStyle}
          aria-label="Modal schließen"
        >
          ×
        </button>
        <div style={iframeWrapStyle}>
          <iframe
            title="Holistic Gym Webshop"
            width="1200"
            height="700"
            src={WEBSHOP_URL}
            scrolling="yes"
            frameBorder="0"
            style={iframeStyle}
          />
        </div>
      </div>
    </div>
  );
};

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
  padding: "20px",
};

const modalStyle = {
  position: "relative",
  width: "100%",
  maxWidth: "1240px",
  backgroundColor: "#fff",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
};

const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "20px",
  fontSize: "28px",
  background: "transparent",
  border: "none",
  color: "#1e293b",
  cursor: "pointer",
  zIndex: 2,
};

const iframeWrapStyle = {
  position: "relative",
  zIndex: 1,
  width: "100%",
  maxHeight: "calc(100vh - 80px)",
  overflow: "auto",
};

const iframeStyle = {
  border: "none",
  width: "100%",
  minHeight: "700px",
  display: "block",
};

export default GymWebshopModal;
