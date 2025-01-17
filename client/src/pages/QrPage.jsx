import axios from "axios";
import { useState } from "react";

const QrPage = ({ busId }) => {
  const [qrCode, setQrCode] = useState("");
  const generateQR = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8804/generateQR?rollNo=${busId}`
      );
      setQrCode(response.data); // Set the QR code image in state
    } catch (error) {
      console.error("Error generating QR code", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={generateQR}>Generate QR Code</button>
      <div
        style={{ marginTop: "20px" }}
        dangerouslySetInnerHTML={{ __html: qrCode }}
      />
    </div>
  );
};

export default QrPage;
