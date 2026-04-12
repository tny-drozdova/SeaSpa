import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageSquare } from 'lucide-react';
import { toast } from "sonner";

const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', message: '', smsConsent: false });
  const [phoneError, setPhoneError] = useState('');
  const [sending, setSending] = useState(false);

  const validatePhone = (value) => {
    if (!value) return 'Phone number is required.';
    if (!PHONE_REGEX.test(value.trim())) return 'Please enter a valid phone number (e.g. 555-123-4567).';
    return '';
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    setForm({ ...form, phone: val });
    if (phoneError) setPhoneError(validatePhone(val));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validatePhone(form.phone);
    if (err) {
      setPhoneError(err);
      return;
    }
    setSending(true);
    const smsBody = encodeURIComponent(`Hi SeaSpa! My name is ${form.name}. ${form.message}`);
    window.open(`sms:+1XXXXXXXXXX?body=${smsBody}`, '_self');
    toast.success("Opening your messaging app...");
    setSending(false);
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
          <h2
            id="contact-heading"
            className="font-heading text-3xl md:text-5xl font-light text-sea-salt mb-4"
          >
            Contact Us
          </h2>
          <p className="text-mist-grey text-sm font-body">
            Have questions or want to plan something special? Send us a message.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-muted rounded-lg p-5 sm:p-8 md:p-10 space-y-5"
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                className="bg-background border-border text-sea-salt placeholder:text-mist-grey/50 focus-ring"
                placeholder="Your name"
              />
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
                aria-describedby={phoneError ? "phone-error" : undefined}
                value={form.phone}
                onChange={handlePhoneChange}
                onBlur={() => setPhoneError(validatePhone(form.phone))}
                className={`bg-background border-border text-sea-salt placeholder:text-mist-grey/50 focus-ring ${phoneError ? 'border-red-400' : ''}`}
                placeholder="(555) 123-4567"
              />
              {phoneError && (
                <p id="phone-error" className="text-red-400 text-xs mt-1 font-body" role="alert">
                  {phoneError}
                </p>
              )}
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
              className="bg-background border-border text-sea-salt placeholder:text-mist-grey/50 focus-ring resize-none"
              placeholder="Tell us about your plans..."
            />
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