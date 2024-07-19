const Header = () => {
  return (
    <header>
      <section className="flex flex-col items-center">
        <div className="w-4/5 h-20 flex justify-between items-center">
          <div className="flex flex-row gap-20 ">
            <h1>
              <strong>Brainwave.io</strong>
            </h1>
            <ul className="flex gap-5 ">
              <li>
                <a href="">Demos</a>
              </li>
              <li>
                <a href="">Pages</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>

          <button className="w-52 h-12 bg-blue-600 rounded-lg text-white">
            Get started project
          </button>
        </div>
        <div>
          <div className="max-w-xl text-start flex flex-col">
            <span className="text-red-600">Let’s shift your bus</span>
            <h2 className="text-4xl">
              <strong>Shift your business fast with Shade Pro</strong>
            </h2>
            <span className="text-stone-500">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next consultancy website within few minutes.
            </span>
            <button className="w-52 h-12 bg-blue-600 rounded-lg text-white">
              Get started project
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};
export default Header;
