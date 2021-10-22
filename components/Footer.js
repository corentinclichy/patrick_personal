function Footer() {
  return (
    <div className="flex flex-col items-center justify-center h-20 text-sm text-gray-400 font-extralight">
      <p className="mb-3">&copy; 2021 patrickclichy.com 2021</p>
      <p className="text-xs">
        Build by{" "}
        <strong className=" hover:underline">
          <a target="_blank" href="www.github.com">
            Corentin Clichy
          </a>
        </strong>
      </p>
    </div>
  );
}

export default Footer;
