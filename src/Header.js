import BackgroundImage from "./assets/background.jpg";
import Banner from "./Components/Baner";

export default function Header() {
  return (
    <div
      className="flex bg-cover h-screen animate-fadeInLeft"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: "center 40%",
      }}
    >
      <Banner />
      
    </div>
  );
}
