import { useEffect, useRef, useState } from "react";
import { CONTACT_PHONE } from "../constants/contact";

function ContactCallModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    dialogRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(CONTACT_PHONE);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  if (!isOpen) return null;

  return (
    <div
      className="contact-modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="contact-modal font-inter relative w-full max-w-md rounded-2xl bg-white p-6 text-left shadow-box"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-call-modal-title"
        tabIndex="-1"
      >
        <h2 id="contact-call-modal-title" className="text-xl font-medium text-black">
          Calling isn&apos;t available on this device
        </h2>
        <p className="mt-3 text-gray-600">
          You can reach me at <a className="font-medium text-black" href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE}</a>
        </p>
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="rounded-2xl bg-black px-4 py-2 text-white transition-colors duration-300 hover:bg-violet-600"
          >
            {copied ? "Copied!" : "Copy number"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl border border-gray-300 px-4 py-2 text-black transition-colors duration-300 hover:bg-gray-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactCallModal;
