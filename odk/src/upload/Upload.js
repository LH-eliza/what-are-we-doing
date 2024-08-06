import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Upload.css";

const Upload = () => {
  const [photos, setPhotos] = useState({});
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get("/api/photos");
      const groupedPhotos = response.data.reduce((acc, photo) => {
        const date = new Date(photo.date).toISOString().split("T")[0];
        if (!acc[date]) acc[date] = [];
        acc[date].push(photo);
        return acc;
      }, {});
      setPhotos(groupedPhotos);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("location", location);
    formData.append("description", description);

    try {
      await axios.post("/api/upload", formData);
      fetchPhotos();
      setLocation("");
      setDescription("");
      setSelectedFile(null);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="Upload">
      <h1>Upload Photos from the Trip!</h1>
      <div className="upload-section">
        <input type="file" onChange={handleFileChange} />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Title/Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleUpload}>Upload</button>
      </div>
      <div className="photos-section">
        <h2>Look at how we spent our days.</h2>
        {Object.keys(photos).map((date) => (
          <div key={date} className="day-section">
            <h3>{`Day ${new Date(date).toLocaleDateString()}`}</h3>
            <div className="photos-grid">
              {photos[date].map((photo, index) => (
                <div key={index} className="photo-card">
                  <img src={`/${photo.filePath}`} alt={photo.description} />
                  <p>{photo.location}</p>
                  <p>{photo.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upload;
