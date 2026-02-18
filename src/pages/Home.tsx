import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type Project = {
  id: string;
  title: string;
  pillar: string;
  usageCount: number;
};

const projects: Project[] = [
  { id: "1", title: "Demo Project", pillar: "Core", usageCount: 0 },
  { id: "2", title: "Another Project", pillar: "Support", usageCount: 3 },
];

export default function Home() {
  const navigate = useNavigate();
  const [flippedId, setFlippedId] = useState<string | null>(null);

  const items = useMemo(() => projects, []);

  return (
    <div className="pagePad">
      <h1 className="title">TrackeddOut</h1>

      <div className="grid">
        {items.map((project) => {
          const flipped = flippedId === project.id;

          return (
            <div key={project.id} className={"card " + (flipped ? "isFlipped" : "")}>
              <div className="cardInner">
                {/* FRONT */}
                <div className="cardFace cardFront">
                  <div>
                    <div className="cardTitle">{project.title}</div>
                    <div className="cardMeta">{project.pillar}</div>
                    <div className="cardMeta">Used {project.usageCount} times</div>
                  </div>

                  <div className="cardActions">
                    <button
                      className="btn btnPrimary"
                      onClick={() => {
                        // IMPORTANT: backticks for template string
                        navigate(`/project/${project.id}`);
                      }}
                    >
                      Open
                    </button>

                    <button className="btn btnGhost" onClick={() => setFlippedId(project.id)}>
                      Flip
                    </button>
                  </div>
                </div>

                {/* BACK */}
                <div className="cardFace cardBack">
                  <div>
                    <div className="cardTitle">{project.title}</div>
                    <div className="cardMeta">Back of card (notes / options)</div>
                  </div>

                  <div className="cardActions">
                    <button className="btn btnGhost" onClick={() => setFlippedId(null)}>
                      Back
                    </button>

                    <button className="btn btnPrimary" onClick={() => navigate(`/project/${project.id}`)}>
                      Open
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
