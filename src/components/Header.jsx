import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          {["About us", "Services", "Contact us"].map((item, i) => (
            <a
              key={i}
              href="#"
              className="
                text-sm font-medium text-gray-700
                hover:text-black
                transition
              "
            >
              {item}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}
