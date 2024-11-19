import BackgroundImage from "./assets/background.jpg";
import Banner from "./Components/Banner";


export default function LandingPage() {
  return (
    <>
    <div
      className="  bg-cover h-screen animate-fadeInLeftBack"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: "center 40%",
      }}
    >
      <Banner />


    </div>
    
    </>
  );
}
