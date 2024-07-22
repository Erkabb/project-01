const Footer = () => {
  return (
    <>
      <section
        className="bg-blue-950 flex flex-col items-center justify-center gap-10"
        id="footer-section"
      >
        <div className="flex text-white items-center gap-80" id="get">
          <div>
            <h2 className="text-4xl">
              <strong>Ready to launch your next project?</strong>
            </h2>
            <span className="text-lg">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </span>
          </div>
          <button className="w-52 h-12 bg-blue-600 rounded-lg text-white">
            Get started a project
          </button>
        </div>
        <div
          className="flex flex-row text-white gap-20 items-baesline "
          id="footer"
        >
          <div className=" flex flex-col gap-5">
            <h2 className="text-4xl">
              <strong>Brainwave.io</strong>
            </h2>
            <span className="text-gray-500 text-xl">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </span>
          </div>
          <div className="text-sm flex flex-col gap-5">
            <span className="text-gray-500">Company</span>
            <ul className="leading-10">
              <li>About us</li>
              <li>Contact us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-gray-500">Product</span>
            <ul className="leading-10">
              <li>Features</li>
              <li>Pricing</li>
              <li>News</li>
              <li>Help desk</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-gray-500">Services</span>
            <ul className="leading-10">
              <li>Digital Marketing</li>
              <li>Content Writing</li>
              <li>SEO for Business</li>
              <li>UI Design</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
