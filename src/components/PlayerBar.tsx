import { useMemo, useState } from "react";

export default function PlayerBar() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isRecording, setIsRecording] = useState(false);

  const label = useMemo(() => {
    if (isRecording) return "Recording…";
    return isPlaying ? "Track playing" : "Paused";
  }, [isPlaying, isRecording]);

  return (
    <div className="playerBar">
      <div className="playerLeft">
        <span className="playerDot" aria-hidden="true" />
        <span className="playerLabel">{label}</span>
      </div>

      <div className="playerButtons">
        <button
          className="btn btnGhost"
          onClick={() => {
            if (isRecording) return;
            setIsPlaying((v) => !v);
          }}
        >
          Play
        </button>

        <button
          className="btn btnGhost"
          onClick={() => {
            setIsRecording((v) => !v);
            setIsPlaying(false);
          }}
        >
          {isRecording ? "Stop" : "Record"}
        </button>
      </div>
    </div>
  );
}