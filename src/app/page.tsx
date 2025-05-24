import Map from "~/components/Map";
import Masthead from "~/components/Masthead";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <Masthead>Park bioróżnorodności w Sosnowcu</Masthead>
      <Map />
    </div>
  );
}
