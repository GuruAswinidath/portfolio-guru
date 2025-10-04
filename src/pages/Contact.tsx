import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(3, { message: 'Name must be at least 3 characters' }).max(100),
  email: z.string().trim().email({ message: 'Invalid email address' }).max(255),
  message: z.string().trim().min(20, { message: 'Message must be at least 20 characters' }).max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      contactSchema.parse(formData);

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: 'Message sent successfully!',
        description: "I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        toast({
          title: 'Error',
          description: 'Something went wrong. Please try again.',
          variant: 'destructive',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name.trim().length >= 3 && 
                      formData.email.includes('@') && 
                      formData.message.trim().length >= 20;

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="mb-4">Get in Touch</h1>
          <p className="text-secondary text-lg">
            Interested in collaboration or have a project in mind? Let's connect and discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={errors.name ? 'border-destructive' : ''}
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={errors.email ? 'border-destructive' : ''}
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  rows={6}
                  className={errors.message ? 'border-destructive' : ''}
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={!isFormValid || isSubmitting}
                className="w-full group"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-smooth group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-card rounded-xl p-6 shadow-card">
              <h3 className="font-bold text-lg mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:guruaswinidath25@gmail.com"
                  className="flex items-center gap-3 text-secondary hover:text-primary transition-smooth"
                >
                  <Mail className="h-5 w-5" />
                  <span>guruaswinidath25@gmail.com</span>
                </a>
                <a
                  href="tel:+919550793200"
                  className="flex items-center gap-3 text-secondary hover:text-primary transition-smooth"
                >
                  <Phone className="h-5 w-5" />
                  <span>+91 9550793200</span>
                </a>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card">
              <h3 className="font-bold text-lg mb-4">Connect on Social</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/guruaswinidath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/guruaswinidath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">Looking for AI Engineers?</h3>
              <p className="text-sm opacity-90">
                I'm available for full-time opportunities and interesting freelance projects. 
                Let's discuss how I can contribute to your team.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
