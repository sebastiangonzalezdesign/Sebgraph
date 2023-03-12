import React, { useState, useEffect } from "react";
import { Button } from "../../../components/Button";
import "./Contact.scss";

const EmailCopy = () => {
  const [copySuccessMessage, setCopySuccessMessage] = useState("");
  const [instructions, setInstructions] = useState("");
  const email = "sebgraph7@gmail.com";

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [copySuccessMessage]);

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage(`${email} copied to clipboard`);
    setInstructions("");
  }

  function showInstruction() {
    if (copySuccessMessage) {
      return;
    }
    setInstructions(`click to copy ${email}`);
  }

  function hideInstruction() {
    setInstructions("");
  }

  return (
    <div className="button-container">
      <div className="messageContainer2">
        <span className="message ">
          {copySuccessMessage} {instructions}
        </span>
      </div>
      <Button
        onClick={copyEmail}
        onMouseOver={showInstruction}
        onMouseOut={hideInstruction}
      >
        Copy mail
      </Button>
    </div>
  );
};

export default EmailCopy;
