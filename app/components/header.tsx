import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
      <div className="fade-bottom absolute left-0 h-20 w-full bg-background/15 backdrop-blur-lg"></div>
      <div className="relative mx-auto max-w-container">
        <NavbarComponent>
          <NavbarLeft>
            <a href="#" className="flex items-center gap-2 text-xl font-bold">
              NG
            </a>
          </NavbarLeft>
          <NavbarRight>
            {/* <a href="/" className="hidden text-sm md:block">
              Sign in
            </a> */}
            <Button variant="default" asChild>
              <a href="#">Get Started</a>
            </Button>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
};

export default Header;