import { Redirect } from "expo-router";

export default function Home() {
  return (
    <Redirect
      href={{
        pathname: "/(patient)/booking/[doctorId]",
        params: { doctorId: "test123" },
      }}
    />
  );
}