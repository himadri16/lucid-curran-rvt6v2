import React, { useState, useEffect } from "react";
import { getFolders } from "./api";
import "./styles.css";

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [workflows, setWorkflows] = useState([]);

  useEffect(() => {
    getFolders().then((data) => {
      setProjects(data);
    });
  }, []);

  const handleProjectClick = (projectId) => {
    // Check if project is already selected
    if (selectedProjects.includes(projectId)) {
      // Remove project from selected list
      setSelectedProjects(selectedProjects.filter((id) => id !== projectId));
      setWorkflows(workflows.filter((wf) => wf.projectId !== projectId));
    } else {
      // Add project to selection
      setSelectedProjects([...selectedProjects, projectId]);
      const project = projects.find((p) => p.id === projectId);
      if (project) {
        setWorkflows([...workflows, { projectId, folders: project.folders }]);
      }
    }
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="top-bar">
        <h1>
          Workflow Management - <span className="highlight">Solutions</span>
        </h1>
        <div className="top-buttons">
          <button className="dashboard-btn">Dashboard</button>
          <button className="new-project-btn">Create New Project</button>
          <button className="new-dashboard-btn">Create New Dashboard</button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="dashboard-layout">
        {/* Left Side: Project List */}
        <div className="project-list">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-item ${
                selectedProjects.includes(project.id) ? "active" : ""
              }`}
              onClick={() => handleProjectClick(project.id)}
            >
              📁 {project.name}
            </div>
          ))}
        </div>

        {/* Right Side: Folder Workflow */}
        <div className="workflow-container">
          <div className="workflow-scroll">
            {workflows.length > 0 ? (
              workflows.map((workflow) => (
                <div key={workflow.projectId} className="workflow-section">
                  <h3>
                    📂 {projects.find((p) => p.id === workflow.projectId)?.name}
                  </h3>
                  <div className="workflow-grid">
                    {workflow.folders.map((folder) => (
                      <div
                        key={folder.id}
                        className={`folder-box ${folder.status}`}
                      >
                        <span className="folder-name">{folder.name}</span>
                        {/* Show Subfolders */}
                        {folder.subfolders && folder.subfolders.length > 0 && (
                          <div className="subfolder-list">
                            {folder.subfolders.map((sub) => (
                              <div
                                key={sub.id}
                                className={`subfolder-box ${sub.status}`}
                              >
                                {sub.name}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p>Select a project to view folders</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
