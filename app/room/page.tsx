"use client";

import "@livekit/components-styles";
import {
  LiveKitRoom,
  VideoConference,
  GridLayout,
  ParticipantTile,
} from "@livekit/components-react";
import { useEffect, useState } from "react";

export default function Page() {
  // TODO: get user input for room and name
  const room = "quickstart-room";
  const name = "quickstart-user";
  const [token, setToken] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(`/api/livekit?room=${room}&username=${name}`);
        const data = await resp.json();
        setToken(data.token);
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  if (token === "") {
    return <div>Getting token...</div>;
  }

  return (
    <LiveKitRoom
      video={true}
      audio={true}
      token={token}
      connectOptions={{ autoSubscribe: false }}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      // Use the default LiveKit theme for nice styles.
      data-lk-theme="default"
      style={{ height: "100dvh" }}
    >
      <VideoConference></VideoConference>
    </LiveKitRoom>
  );
}
