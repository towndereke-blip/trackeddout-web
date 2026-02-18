import { Outlet } from "react-router-dom";
import PlayerBar from "./PlayerBar";

export default function Layout() {
  return (
    <div className="appShell">
      <div className="appFrame">
        <div className="pageArea">
          <Outlet />
        </div>
        <PlayerBar />
      </div>
    </div>
  );
}
