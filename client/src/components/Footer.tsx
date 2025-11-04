export default function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground font-bold text-xl">
                R
              </div>
              <h2 className="text-xl font-bold text-foreground">RankCascade</h2>
            </div>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-tagline">
              Professional local and organic rank tracking for businesses and agencies.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-product">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors" data-testid="link-footer-features">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-footer-pricing">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-footer-demo">Demo</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-resources">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-footer-blog">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-footer-guides">Guides</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors" data-testid="link-footer-help">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-company">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-footer-about">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-footer-contact">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-footer-privacy">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t text-center text-sm text-muted-foreground" data-testid="text-copyright">
          <p>&copy; {new Date().getFullYear()} RankCascade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
