function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col gap-6 md:flex-row md:gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src="../public/fund1.png" alt="Logo" className="h-10 mb-3" />
          <p className="text-sm leading-relaxed">
            We are committed to bringing you the best service. Follow us on our
            journey and stay updated with the latest news and offers.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
          <ul className="space-y-1 text-sm text-center md:text-left">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4 text-2xl items-center justify-center md:justify-start">
          <a href="https://facebook.com" className="hover:text-blue-600">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="https://twitter.com" className="hover:text-blue-400">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a href="https://instagram.com" className="hover:text-pink-600">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="https://linkedin.com" className="hover:text-blue-700">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>

      <div className="text-center text-sm mt-6">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
