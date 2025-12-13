import { useState } from "react";
import { Phone, Mail, MapPin, Globe, Send, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Create mailto link
    const subject = encodeURIComponent("Crampnil Website Enquiry");
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || "Not provided"}\n` +
      `Country: ${formData.country || "Not provided"}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:bdmexport@westcoastin.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
    toast({
      title: "Thank you!",
      description: "Your enquiry has been initiated. Please complete sending the email in your mail client.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-10 lg:py-14 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium mb-2">
            Get in Touch
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Have questions about our products or want to place an order? 
            We're here to help you with all your enquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">
              Contact Information
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-0.5">Phone</h4>
                  <a
                    href="tel:+919909005652"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    +91 99090 05652
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-0.5">Email</h4>
                  <a
                    href="mailto:bdmexport@westcoastin.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    bdmexport@westcoastin.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-0.5">Address</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Meldi Estate, Near Prasang Party Plot,<br />
                    Opp. Sola Bhagwat, Sayona City Road,<br />
                    Gota, Ahmedabad - 382481, Gujarat, (India)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-0.5">Website</h4>
                  <a
                    href="https://westcoastin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    https://westcoastin.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-muted/30 rounded-2xl p-4 lg:p-5 shadow-soft">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-6">
                <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center mb-4">
                  <CheckCircle className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Your enquiry has been initiated. Please complete sending the email in your mail client.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", country: "", message: "" });
                  }}
                  className="text-primary hover:underline font-medium text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-foreground mb-1">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm ${
                      errors.name ? "border-destructive" : "border-border"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-0.5 text-xs text-destructive">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm ${
                      errors.email ? "border-destructive" : "border-border"
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-0.5 text-xs text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-foreground mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-xs font-medium text-foreground mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                      placeholder="Your country"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full px-3 py-2 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none text-sm ${
                      errors.message ? "border-destructive" : "border-border"
                    }`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && (
                    <p className="mt-0.5 text-xs text-destructive">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 gradient-bg text-primary-foreground font-semibold rounded-lg shadow-glow-pink hover:shadow-large hover:scale-[1.02] transition-all duration-300 text-sm"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
