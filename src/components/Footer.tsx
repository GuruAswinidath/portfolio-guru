import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Guru Aswini Dath</h3>
            <p className="text-secondary text-sm">
              AI Engineer & Full-Stack Developer building scalable, intelligent systems that turn research into production.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/projects" className="text-secondary hover:text-primary transition-smooth">Projects</a></li>
              <li><a href="/publications" className="text-secondary hover:text-primary transition-smooth">Publications</a></li>
              <li><a href="/experience" className="text-secondary hover:text-primary transition-smooth">Experience</a></li>
              <li><a href="/contact" className="text-secondary hover:text-primary transition-smooth">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/guruaswinidath"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/guruaswinidath"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:guruaswinidath25@gmail.com"
                className="p-2 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="space-y-1 text-sm text-secondary">
              <p className="flex items-center gap-2">
                <Mail size={16} />
                guruaswinidath25@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} />
                +91 9550793200
              </p>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-secondary">
          <p className="mb-2">© 2025 Guru Aswini Dath. All rights reserved.</p>
          <p className="text-xs">
            Outside of AI, I enjoy sustainability hackathons, mentoring peers, and building green-tech solutions with my club.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
