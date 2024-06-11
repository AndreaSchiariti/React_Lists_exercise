import { Colors } from "./Colors";

export function App() {
  const arrayOfColors = [
    { name: "red", id: 1 },
    { name: "orange", id: 2 },
    { name: "yellow", id: 3 },
    { name: "green", id: 4 },
    { name: "blue", id: 5 },
    { name: "violet", id: 6 },
  ];

  return (
    <>
      <Colors arrayOfColors={arrayOfColors} />
    </>
  );
}
