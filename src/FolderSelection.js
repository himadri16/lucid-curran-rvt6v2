import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getFolders } from "./api";

function FolderSelection() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getFolders().then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <div className="container">
      <h1>Select Folders</h1>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <h3>📁 {project.name}</h3>
            {project.folders.map((folder) => (
              <label key={folder.id} className="folder-checkbox">
                <input type="checkbox" defaultChecked={folder.selected} />
                {folder.name}
              </label>
            ))}
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/")}>Save & Go to Dashboard</button>
    </div>
  );
}

export default FolderSelection;
