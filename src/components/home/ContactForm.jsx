import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageSquare } from 'lucide-react';
import { toast } from "sonner";

// Strict US 10-digit: accepts 555-123-4567 / (555) 123-4567 / 5551234567 / +15551234567
const PHONE_REGEX = /^(\+1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', message: '', smsConsent: false });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!PHONE_REGEX.test(form.phone.trim())) {
      newErrors.phone = 'Please enter a valid US phone number (e.g. 555-123-4567).';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSending(true);
    const smsBody = encodeURIComponent(`Hi SeaSpa! My name is ${form.name}. ${form.message}`);
    window.open(`sms:+1XXXXXXXXXX?body=${smsBody}`, '_self');
    toast.success("Opening your messaging app...");
    setSending(false);
  };

  const handleChange = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  return (
    <section
      id="about"
      className="py-12 md:py-40 bg-deep-atlantic glass-rule"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <p className="font-body text-sky-horizon text-sm font-semibold tracking-widest uppercase mb-4">
            Get in Touch
          </p>
          <h2 id="contact-heading" className="font-heading text-3xl md:text-5xl font-light text-sea-salt mb-4">
            Contact Us
          </h2>
          <p className="text-mist-grey text-sm font-body">
            Have questions or want to plan something special? Send us a message.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-muted rounded-lg p-5 sm:p-8 md:p-10 space-y-5" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <Label htmlFor="contact-name" className="font-body text-sea-salt text-sm mb-2 block">
                Name <span className="text-sky-horizon" aria-label="required">*</span>
              </Label>
              <Input
                id="contact-name"
                type="text"
                required
                aria-required="true"
                aria-describedby={errors.name ? "name-error" : undefined}
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className={`bg-background border-border text-sea-salt placeholder:text-mist-grey/50 focus-ring ${errors.name ? 'border-red-400' : ''}`}
                placeholder="Your name"
              />
              {errors.name && <p id="name-error" className="text-red-400 text-xs mt-1 font-body" role="alert">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="contact-phone" className="font-body text-sea-salt text-sm mb-2 block">
                Phone <span className="text-sky-horizon" aria-label="required">*</span>
              </Label>
              <Input
                id="contact-phone"
                type="tel"
                required
                aria-required="true"
                aria-describedby={errors.phone ? "phone-error" : "phone-hint"}
                value={form.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className={`bg-background border-border text-sea-salt placeholder:text-mist-grey/50 focus-ring ${errors.phone ? 'border-red-400' : ''}`}
                placeholder="555-123-4567"
              />
              {errors.phone
                ? <p id="phone-error" className="text-red-400 text-xs mt-1 font-body" role="alert">{errors.phone}</p>
                : <p id="phone-hint" className="text-mist-grey/50 text-xs mt-1 font-body">Format: 555-123-4567</p>
              }
            </div>
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="contact-message" className="font-body text-sea-salt text-sm mb-2 block">
              Message <span className="text-sky-horizon" aria-label="required">*</span>
            </Label>
            <Textarea
              id="contact-message"
              required
              rows={4}
              aria-describedby={errors.message ? "message-error" : undefined}
              value={form.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className={`bg-background border-border text-sea-salt placeholder:text-mist-grey/50 focus-ring resize-none ${errors.message ? 'border-red-400' : ''}`}
              placeholder="Tell us about your plans..."
            />
            {errors.message && <p id="message-error" className="text-red-400 text-xs mt-1 font-body" role="alert">{errors.message}</p>}
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
                className="mt-0.5 w-4 h-4 rounded border-border text-sky-horizon focus-ring accent-sky-horizon flex-shrink-0"
              />
              <span className="font-body text-sea-salt/80 text-sm">I agree to be contacted via SMS.</span>
            </label>
            <p className="font-body text-mist-grey/60 text-xs pl-7">Standard messaging rates may apply.</p>
          </div>

          <Button
            type="submit"
            disabled={sending || !form.smsConsent}
            className="w-full bg-sky-horizon text-deep-atlantic font-body font-semibold py-5 hover:bg-sky-horizon/90 hover:ring-[3px] hover:ring-white focus-ring transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MessageSquare className="w-4 h-4 mr-2" aria-hidden="true" />
            {sending ? 'Opening...' : 'Send via SMS'}
          </Button>
        </form>
      </div>
    </section>
  );
}