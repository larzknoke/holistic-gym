"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";

const GymLectureModal = ({ isOpen, onClose, images, initialIndex = 0 }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(initialIndex);

  useEffect(() => {
    setActiveImageIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowLeft") {
        setActiveImageIndex((prev) =>
          prev === 0 ? images.length - 1 : prev - 1,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveImageIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose, images.length]);

  const activeImage = useMemo(
    () => images[activeImageIndex],
    [images, activeImageIndex],
  );

  if (!isOpen || !activeImage) return null;

  const closeModal = () => onClose();

  const showPrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNextImage = () => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

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
          <button
            onClick={closeModal}
            style={closeButtonStyle}
            aria-label="Modal schließen"
          >
            <IconX size={20} stroke={2.25} aria-hidden="true" />
          </button>
          <div style={modalBodyStyle}>
            <div className="relative aspect-3/4 sm:aspect-16/10 w-full rounded-md overflow-hidden bg-gym-primary/5">
              <Image
                key={activeImage.src}
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain "
                sizes="90vw"
                priority
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <button
                type="button"
                onClick={showPrevImage}
                className="btn btn-soft-primary px-4 py-2"
                aria-label="Vorheriges Bild"
              >
                <IconChevronLeft size={18} stroke={2.25} aria-hidden="true" />
              </button>
              <div className="flex items-center gap-2">
                {images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    className={`h-3.5 w-3.5 rounded-full ${
                      index === activeImageIndex
                        ? "bg-gym-primary"
                        : "bg-[#cbd5e1]"
                    }`}
                    aria-label={`Bild ${index + 1} anzeigen`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={showNextImage}
                className="btn btn-soft-primary px-4 py-2"
                aria-label="Nächstes Bild"
              >
                <IconChevronRight size={18} stroke={2.25} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
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
  transition: "0.4s",
};

const modalStyle = {
  position: "relative",
  width: "90%",
  maxWidth: "960px",
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
  padding: "44px 28px 24px",
  maxHeight: "85vh",
  overflowY: "auto",
};

export default GymLectureModal;
