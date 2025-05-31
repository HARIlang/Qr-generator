import React, { useState } from "react";

const Qr = () => {
  const [img, setimg] = useState("");
  const [data, setdata] = useState("Hari");
  const [size, setsize] = useState(150);
  const [load, setload] = useState(false);
  const [bgcolor, setbgcolor] = useState("");
  const [color, setcolor] = useState("");

  async function Qrdata() {
    if (size > 250 || size <= 0) {
      alert("The max size is 250 | The min size is 0");
      setimg("");
      return;
    }

    setload(true);

    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
        data
      )}&color=${color}&bgcolor=${bgcolor}`;

      setimg(url);
    } catch (error) {
      console.error(
        "The QR code is not generated, kindly check your internet connection"
      );
    } finally {
      setload(false);
    }
  }
  const handleDownload = () => {
    if (!img) {
      alert("Generate a QR code first.");
      return;
    }

    const link = document.createElement("a");
    link.href = img;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };  

  return (
    <div>
      <div className="container">
        <center>
          <h1>QR Generator</h1>
          <img src={img} alt="" />
          {load && <p>Please wait while loading</p>}

          <table>
            <tr>
              <td>Enter the data</td>
              <td>
                <input
                  type="text"
                  value={data}
                  onChange={(e) => setdata(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Size of QR</td>
              <input
                type="number"
                value={size}
                onChange={(e) => setsize(parseInt(e.target.value))}
              />
            </tr>
            <tr>
              <td>Background Color</td>
              <input
                type="color"
                value={bgcolor}
                onChange={(e) => setbgcolor(e.target.value.slice(1))}
              />
            </tr>
            <tr>
              <td>Select QR Code Color</td>
              <input
                type="color"
                value={color}
                onChange={(e) => setcolor(e.target.value.slice(1))}
              />
            </tr>
          </table>

          <button onClick={Qrdata} className="generate">
            Generate QR
          </button>
          <button className="download" onClick={handleDownload}>Download QR</button>
          <p className="developer">Developed by Hari</p>
        </center>
      </div>
    </div>
  );
};

export default Qr;
