
const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2 text-gradient-pink">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
      <a href="https://www.github.com/thisisbillall" target="_blank">
        <div className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div>
      </a>

      <a href="https://x.com/thisisbillall7" target="_blank">
        <div className="social-icon">
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2 bg-white-800" />
        </div>
      </a>

      <a href="https://www.linkedin.com/in/thisisbillall" target="_blank">
        <div className="social-icon">
          <img src="/assets/linkedin.svg" alt="instagram" className="w-1/2 h-1/2 bg-white-700" />
        </div>
      </a>

      </div>
      

      <p className="text-white-500 text-gradient-blue">© 2024 Bilal Mohammad. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
