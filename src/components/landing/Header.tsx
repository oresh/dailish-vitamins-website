
import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <h1 className="text-2xl font-bold font-serif !text-primary">Dailish</h1>
        <Button asChild>
          <a href="#download">
            <Apple className="mr-2 h-4 w-4" /> Download
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
