import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-between px-6 bg-background/80 backdrop-blur-xl shadow-[0_1px_0_0_hsl(var(--border))]">
      <Link to="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tighter text-foreground no-underline">
        <span className="h-3 w-3 rounded-sm bg-accent shadow-[0_0_12px_hsl(185_100%_50%)]" />
        TICKTU
      </Link>

      <div className="hidden items-center gap-6 md:flex">
        <Link
          to="/"
          className={`text-sm font-medium transition-colors hover:text-foreground ${
            location.pathname === "/" ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          Home
        </Link>
        <Link
          to="/privacy"
          className={`text-sm font-medium transition-colors hover:text-foreground ${
            location.pathname === "/privacy" ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          Privacy Policy
        </Link>
      </div>

      <Button variant="default" size="sm" className="text-xs">
        Get the App
      </Button>
    </nav>
  );
};

export default Navbar;
