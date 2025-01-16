
import { Footer, FooterBottom } from "@/components/ui/footer";
  const FooterSection = () => {
    return (
        <footer className="sticky bottom-0 bg-white bg-opacity-100 z-[1000] p-4">
        <div className="mx-auto max-w-container">
          <Footer className="pt-0">
            <FooterBottom className="mt-0 flex flex-col items-center gap-4 sm:flex-col md:flex-row">
              <div>© 2025 Nikunj Rathod. All rights reserved</div>
              <div className="flex items-center gap-4">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </FooterBottom>
          </Footer>
        </div>
      </footer>
    );
  };
  
  export default FooterSection;