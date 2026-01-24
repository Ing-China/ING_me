"use client";
import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaTelegram,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex items-center min-h-[calc(100vh-4rem)]">
      <div className="max-w-5xl mx-auto p-4 sm:p-8 lg:p-12 w-full">
        <div className="space-y-6 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Contact
          </h1>
          <p className="text-foreground/80 leading-relaxed">
            I&apos;m always open to discussing new opportunities,
            collaborations, or just having a chat about technology. Feel free to
            reach out through any of the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <button
              onClick={() =>
                (window.location.href = "mailto:ingchina2004@gmail.com")
              }
              className="w-full flex items-center gap-4 p-4 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer text-left"
            >
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
                <FaEnvelope className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Email</h3>
                <span className="text-foreground/70">
                  ingchina2004@gmail.com
                </span>
              </div>
            </button>

            <button
              onClick={() =>
                window.open("https://github.com/Ing-China", "_blank")
              }
              className="w-full flex items-center gap-4 p-4 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer text-left"
            >
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
                <FaGithub className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">GitHub</h3>
                <span className="text-foreground/70">@ingchina</span>
              </div>
            </button>

            <button
              onClick={() => window.open("https://t.me/Ing_China", "_blank")}
              className="w-full flex items-center gap-4 p-4 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer text-left"
            >
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
                <FaTelegram className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Telegram</h3>
                <span className="text-foreground/70">@ingchina</span>
              </div>
            </button>

            <button
              onClick={() =>
                window.open("https://www.facebook.com/brochai2004", "_blank")
              }
              className="w-full flex items-center gap-4 p-4 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer text-left"
            >
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
                <FaFacebook className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Facebook</h3>
                <span className="text-foreground/70">@ingchina</span>
              </div>
            </button>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/ing-china-9a3433319/",
                  "_blank",
                )
              }
              className="w-full flex items-center gap-4 p-4 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer text-left"
            >
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
                <FaLinkedin className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">LinkedIn</h3>
                <span className="text-foreground/70">@ingchina</span>
              </div>
            </button>

            <button
              onClick={() =>
                window.open("https://x.com/ingchina2004", "_blank")
              }
              className="w-full flex items-center gap-4 p-4 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer text-left"
            >
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
                <FaTwitter className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Twitter</h3>
                <span className="text-foreground/70">@ingchina</span>
              </div>
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://www.instagram.com/china_asdfghjkl/",
                  "_blank",
                )
              }
              className="w-full flex items-center gap-4 p-4 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer text-left"
            >
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
                <FaInstagram className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Instagram</h3>
                <span className="text-foreground/70">@ingchina</span>
              </div>
            </button>

            <button
              onClick={() =>
                window.open("https://www.youtube.com/@IngChina", "_blank")
              }
              className="w-full flex items-center gap-4 p-4 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer text-left"
            >
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
                <FaYoutube className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">YouTube</h3>
                <span className="text-foreground/70">@ingchina</span>
              </div>
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-green-700">
                ✓ Your message has been sent successfully! I&apos;ll get back to
                you soon.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-700">
                ✗ There was an error sending your message. Please try again or
                contact me directly.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md bg-background text-foreground placeholder:text-foreground/60 focus:outline-none focus:ring-2 transition-colors ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500/20"
                    : "border-foreground/20 focus:ring-foreground/20"
                }`}
                placeholder="Your name"
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md bg-background text-foreground placeholder:text-foreground/60 focus:outline-none focus:ring-2 transition-colors ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500/20"
                    : "border-foreground/20 focus:ring-foreground/20"
                }`}
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md bg-background text-foreground placeholder:text-foreground/60 focus:outline-none focus:ring-2 resize-none transition-colors ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500/20"
                    : "border-foreground/20 focus:ring-foreground/20"
                }`}
                placeholder="Your message..."
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
                isSubmitting
                  ? "bg-foreground/50 text-background/50 cursor-not-allowed"
                  : "bg-foreground text-background hover:bg-foreground/90"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
