import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions about our products or want to place a bulk order? We'd love to hear from you! Reach out through any of these channels.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              <a
                href="https://wa.me/918409236506"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-soft transition-all group"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">WhatsApp Support</p>
                  <p className="text-sm text-muted-foreground">Quick responses, easy ordering</p>
                </div>
              </a>

              <a
                href="https://instagram.com/annadishaofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-soft transition-all group"
              >
                <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Instagram</p>
                  <p className="text-sm text-muted-foreground">@annadisha – Follow us for updates</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">Online Store – Delivering All Over India</p>
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20">
              <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                🚚 Delivery Information
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Pan-India delivery available
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Secure, food-grade packaging
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Freshly prepared on order
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-soft">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Send us a Message
            </h3>
                    <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const whatsappNumber = "918409236506";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const submission = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    // Save to localStorage (structured)
    try {
      const key = "contact_submissions";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      existing.push(submission);
      localStorage.setItem(key, JSON.stringify(existing));
    } catch (err) {
      console.error("Failed to save submission", err);
    }

    // Build WhatsApp message
    const waMessage = `New contact form submission%0AName: ${submission.name}%0APhone: ${submission.phone}%0AEmail: ${submission.email}%0AMessage: ${submission.message}%0ASent: ${new Date(submission.timestamp).toLocaleString()}`;

    const waLink = `https://wa.me/${whatsappNumber}?text=${waMessage}`;

    // show toast
    try {
      toast({ title: "Saved", description: "Saved your message and opening WhatsApp..." });
    } catch (err) {
      // ignore
    }

    // Open WhatsApp in new tab
    window.open(waLink, "_blank");

    // clear form
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Name</label>
          <Input placeholder="Your name" value={name} onChange={(e) => setName((e.target as HTMLInputElement).value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
          <Input placeholder="+91 98765 43210" type="tel" value={phone} onChange={(e) => setPhone((e.target as HTMLInputElement).value)} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Email</label>
        <Input placeholder="you@example.com" type="email" value={email} onChange={(e) => setEmail((e.target as HTMLInputElement).value)} />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Message</label>
        <Textarea placeholder="Tell us about your order or inquiry..." rows={4} value={message} onChange={(e) => setMessage((e.target as HTMLTextAreaElement).value)} />
      </div>
      <Button type="submit" size="lg" className="w-full gap-2">
        <Send className="w-4 h-4" />
        Send Message
      </Button>
    </form>
  );
}
