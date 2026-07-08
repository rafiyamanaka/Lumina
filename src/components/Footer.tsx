export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div>
            <a href="#hero" className="logo">
              Lumina <span>Growth</span>
            </a>
            <p className="footer__tag">Your Strategic Partner from Idea to Growth.</p>
          </div>
          <div>
            <h5>Pages</h5>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#insights">Insights</a></li>
              <li><a href="#resources">Resources</a></li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#book">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5>Social</h5>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">X</a></li>
              <li><a href="#">Dribbble</a></li>
            </ul>
          </div>
        </div>
        <div className="wordmark">Lumina</div>
        <div className="footer__legal">
          <span>© 2026 Lumina Growth. All rights reserved.</span>
          <span>Strategy · Product · Brand · Data</span>
        </div>
      </div>
    </footer>
  );
}