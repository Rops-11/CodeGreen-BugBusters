import Header from "../components/Header";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center bg-about-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <div className="w-full max-w-3xl mb-8 mt-5">
        <Header />
      </div>
      <h1 className="text-textgreen text-2xl font-bold">About Us</h1>
      <p className="text-center mt-2 text-white">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. <br />
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s,
        <br />
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.
        <br />
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. <br />
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, <br />
        and more recently with desktop publishing software like Aldus PageMaker
        including versions of Lorem Ipsum.
      </p>
    </div>
  );
};

export default AboutPage;
