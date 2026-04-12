import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, MessageSquare } from 'lucide-react';
import { toast } from "sonner";

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', message: '', smsConsent: false });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    // Construct SMS link
    const smsBody = encodeURIComponent(
      `Hi SeaSpa! My name is ${form.name}. ${form.message}`
    );
    const smsLink = `sms:+1XXXXXXXXXX?body=${smsBody}`;

    // Open SMS
    window.open(smsLink, '_self');
    toast.success("Opening your messaging app...");
    setSending(false);
  };

  return (
    <section
      id="about"
      className="py-24 md:py-40 bg-deep-atlantic glass-rule"
      aria-labelledby="contact-heading">
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-body text-sky-horizon text-sm font-semibold tracking-widest uppercase mb-4">
            Get in Touch
          </p>
          <h2
            id="contact-heading"
            className="font-heading text-3xl md:text-5xl font-light text-sea-salt mb-4">
            
            Contact Us
          </h2>
          <p className="text-mist-grey text-sm font-body">Have questions or want to plan something special? Send us a message.

          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-card rounded-lg p-6 md:p-10 space-y-6"
          noValidate>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="contact-name" className="font-body text-sea-salt text-sm mb-2 block">
                Name <span className="text-sky-horizon" aria-label="required">*</span>
              </Label>
              <Input
                id="contact-name"
                type="text"
                required
                aria-required="true"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-muted/50 border-border text-sea-salt placeholder:text-mist-grey/50 focus-ring"
                placeholder="Your name" />
              
            </div>
            <div>
              <Label htmlFor="contact-phone" className="font-body text-sea-salt text-sm mb-2 block">
                Phone <span className="text-sky-horizon" aria-label="required">*</span>
              </Label>
              <Input
                id="contact-phone"
                type="tel"
                required
                aria-required="true"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-muted/50 border-border text-sea-salt placeholder:text-mist-grey/50 focus-ring"
                placeholder="(555) 123-4567" />
              
            </div>
          </div>

          <div>
            <Label htmlFor="contact-message" className="font-body text-sea-salt text-sm mb-2 block">
              Message <span className="text-sky-horizon" aria-label="required">*</span>
            </Label>
            <Textarea
              id="contact-message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-muted/50 border-border text-sea-salt placeholder:text-mist-grey/50 focus-ring resize-none"
              placeholder="Tell us about your plans..." />
            
          </div>

          {/* SMS Consent */}
          <div className="space-y-1">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                aria-required="true"
                checked={form.smsConsent}
                onChange={(e) => setForm({ ...form, smsConsent: e.target.checked })}
                className="mt-0.5 w-4 h-4 rounded border-border text-sky-horizon focus-ring accent-sky-horizon flex-shrink-0" />
              
              <span className="font-body text-sea-salt/80 text-sm">
                I agree to be contacted via SMS.
              </span>
            </label>
            <p className="font-body text-mist-grey/60 text-xs pl-7">
              Standard messaging rates may apply.
            </p>
          </div>

          <Button
            type="submit"
            disabled={sending || !form.smsConsent}
            className="w-full bg-sky-horizon text-deep-atlantic font-body font-semibold py-5 hover:bg-sky-horizon/90 focus-ring transition-all disabled:opacity-50 disabled:cursor-not-allowed">
            
            <MessageSquare className="w-4 h-4 mr-2" aria-hidden="true" />
            {sending ? 'Opening...' : 'Send via SMS'}
          </Button>
        </form>
      </div>
    </section>);

}