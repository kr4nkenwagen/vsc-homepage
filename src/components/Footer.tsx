export default function Footer() {
  return (
    <footer className="bg-[var(--foreground)] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-semibold">Växjö Stigcyklister</p>
            <p className="text-sm text-white/50 mt-1">
              Ideell mountainbikeförening i Växjö
            </p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm text-white/60">
            <a href="#om-oss" className="hover:text-white transition-colors">
              Om oss
            </a>
            <a href="#stigar" className="hover:text-white transition-colors">
              Stigar
            </a>
            <a href="#stigbygge" className="hover:text-white transition-colors">
              Stigbygge
            </a>
            <a href="#kontakt" className="hover:text-white transition-colors">
              Kontakt
            </a>
            <a
              href="https://www.facebook.com/vaxjostigcyklister/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook
            </a>
          </nav>
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Växjö Stigcyklister
          </p>
        </div>
      </div>
    </footer>
  );
}
