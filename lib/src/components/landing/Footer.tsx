import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="download" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold font-serif !text-background">Dailish. Not perfect. Just better.</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto !text-primary-foreground/80">
          Ready to feel like a slightly more responsible adult?<br/>Download Dailish from the App Store today.
        </p>
        <div>
          <a href="#download-app-store">
            <img src="/download-icon-white.svg" alt="Download on the App Store" className="h-14 w-auto mx-auto" />
          </a>
        </div>
        <div className="pt-8 text-sm !text-primary-foreground/60">
          <p>&copy; 2025 Dailish. All Rights Reserved. Made with 💚.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
