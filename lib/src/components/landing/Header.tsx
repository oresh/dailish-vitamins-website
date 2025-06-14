import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <h1 className="text-2xl font-bold font-serif !text-primary">Dailish</h1>
        <a href="#download">
          <img src="/download-icon.svg" alt="Download on the App Store" className="h-8 w-auto" />
        </a>
      </div>
    </header>
  );
};

export default Header;
