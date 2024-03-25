import { useEffect, useState } from "react";

export default function LampComponent() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/profiles/") // Update the URL to match your Django API endpoint
      .then((response) => response.json())
      .then((data) => setProfiles(data.profiles))
      .catch((error) => console.error("Error fetching profiles:", error));
  }, []);
  console.log("profiles", profiles);
  return (
    <div className="w-full h-screen flex bg-red-200 flex-col">
      <h1 className="text-bold text-3xl p-3">Profiles</h1>
      <ul className="w-full h-full flex flex-col bg-orange-300">
        {profiles?.map((profile) => (
          <li
            className="text-black text-xl flex justify-center items-center"
            key={profile.id}
          >
            aaa {profile.name} - {profile.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
