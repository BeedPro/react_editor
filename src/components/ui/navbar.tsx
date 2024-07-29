import { Code } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <div className="bg-base-300 h-12 flex items-center p-4">
        <ul className="flex gap-2 text-xs items-center">
          <li>
            <Code />
          </li>
          <li>File</li>
          <li>Edit</li>
          <li>Selection</li>
          <li>View</li>
          <li>Go</li>
          <li>Run</li>
          <li>Terminal</li>
          <li>Help</li>
        </ul>
      </div>
    </>
  );
}
