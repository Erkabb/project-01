const Header = () => {
  return (
    <header>
      <section className="flex flex-col items-center">
        <div className="w-4/5 h-20 flex justify-between items-center">
          <div className="flex flex-row gap-20 items-center">
            <h1 className="text-2xl">
              <strong>Brainwave.io</strong>
            </h1>
            <ul className="flex gap-5 text-base">
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
        <div className="flex mt-20 mb-20 gap-20">
          <div className="max-w-xl text-start flex flex-col gap-5 justify-center">
            <span className="text-red-600">LET'S SHIFT YOUR BUSINESS</span>
            <h2 className="text-4xl">
              <strong>Shift your business fast with Shade Pro.</strong>
            </h2>
            <span className="text-stone-500">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next consultancy website within few minutes.
            </span>
            <button className="w-52 h-12 bg-blue-600 rounded-lg text-white">
              Get started project
            </button>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/ad3c/ac35/9a49841825f8984b6b92cb76f7e8b4dc?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cXdAWWbpjPDaL5d2rmQYND62jPe5ezceCImyr80aB8wZCdnT3pYzaTBqHboMFtssX8RKa3CPTr67HEUwIn4t9jYkSMbfYthdeEm5M6cX0Gy9l-bHLyY4bYhoCBl387iyhE6h7ofVWEMztFQljZMV9~x5ZtblFIU6zlDytwYGINKUSHMyeIfGyyLqdh-Al~0hyVqJai45BXwRHgP1qx4W4mEUGqOWgCG4T62YEGw0B5dKrOz8KoNlYQ9lelPTpaxffrvS4Fp-1nJZ1rXQvSJO6~JiLjemHKKxzbtC27th3F59h7UaN2TAOV37fDlz4~DBXesk4HIUATov1g761xTppg__"
            alt=""
            className="rounded-full"
          />
        </div>
      </section>
    </header>
  );
};
export default Header;
