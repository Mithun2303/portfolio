export const Home = () => {
  return (
    <main className="home bg-fixed bg-center bg-cover text-left">
      <div className="lg:top-[15vh] md:top-[20%] sm:top-[20%] lg:w-[50%] md:w-[50%] sm:w-[75%] p-4 absolute lg:md:left-[25%] sm:left-[12.25%] sm:mr-[12.25%] lg:md:mr-[25%] text-4xl text-text">
        <span>Hi, my name is </span>
        <span className="text-highlight">
          Mithun Karthick Venkatesan.
          <br />
        </span>
        <span>
          I am a full stack developer
          <br />
        </span>
        <span>
          specialising in
          <br />
        </span>
        <span className="text-primary">react JS & node JS.</span>
      </div>
    </main>
  );
};
