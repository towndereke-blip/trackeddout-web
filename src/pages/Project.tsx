import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Project = {
  id: string;
  name?: string;
  // add other fields as needed
};

const projects: Project[] = [
  { id: "1", name: "Example Project" },
  // replace with real project data or restore the import when ../data/projects is available
];

export default function Project() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const project = useMemo(
    () => projects.find((p) => p.id === projectId),
    [projectId]
  );

  return (
    <div className="pagePad">
      <div className="projectHeader">
        <button className="btn btnGhost" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h1 className="title">Project Station</h1>
      </div>

      <div className="stationBox">
        <div className="stationTitle">Record Station</div>
        <div className="stationId">{project?.id ?? projectId}</div>
      </div>
    </div>
  );
}
