import "animate.css/animate.compat.css";


export const Hero = () => {
  return (
    <>
      <div data-aos="fade-left" 
        className="hero min-h-screen"
        style={{backgroundImage: `url('https://source.unsplash.com/600x400/?iced,latte')`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold font-inter">Lets Coffee</h1>
            <p className="mb-5 font-inter">
            "Dari ladang hingga gelas Anda, kami memahami bahwa kopi adalah perjalanan. Temukan pengalaman yang mendalam di setiap cangkir kami."
            </p>
            <button className="btn btn-primary font-inter">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};
