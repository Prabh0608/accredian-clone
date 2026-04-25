"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { IMAGES } from "@/lib/data";

const EnquiryModalContext = createContext(null);

const domainOptions = [
  "Leadership Development",
  "Generative AI",
  "Tech & Data",
  "Product Innovation",
  "Operations Excellence",
  "Fintech Innovation",
];

const deliveryOptions = ["Online", "Offline", "Hybrid"];

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  domain: "",
  candidateCount: "",
  deliveryMode: "",
  location: "",
};

export function EnquiryModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const value = useMemo(
    () => ({
      openModal: () => setIsOpen(true),
      closeModal: () => setIsOpen(false),
    }),
    [],
  );

  return (
    <EnquiryModalContext.Provider value={value}>
      {children}
      <EnquiryModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const context = useContext(EnquiryModalContext);

  if (!context) {
    throw new Error("useEnquiryModal must be used within EnquiryModalProvider");
  }

  return context;
}

function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setFormData(initialFormState);
      setStatus({ type: "", message: "" });
      setIsSubmitting(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message: "Your enquiry has been submitted successfully.",
      });
      setFormData(initialFormState);
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to submit your enquiry right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/45 p-4 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[88vh] w-full max-w-4xl overflow-hidden rounded-[1rem] bg-white shadow-[0_32px_80px_rgba(15,23,42,0.28)] dark:bg-slate-900"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="hidden w-[41%] bg-slate-200 lg:block">
          <img
            src={IMAGES.business}
            alt="Corporate training"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-full overflow-y-auto px-5 py-5 sm:px-6 lg:w-[59%] lg:px-6 xl:px-7">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            aria-label="Close enquiry modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <h2 className="pr-10 text-2xl font-semibold text-slate-800 dark:text-white">
            Enquire Now
          </h2>

          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <Field>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name"
                className={inputClassName}
                required
              />
            </Field>

            <Field>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className={inputClassName}
                required
              />
            </Field>

            <Field className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 whitespace-nowrap text-base font-medium text-slate-800 dark:text-white">
                <span className="flex flex-col gap-[3px]">
                  <span className="h-[3px] w-6 rounded bg-orange-400" />
                  <span className="h-[3px] w-6 rounded bg-white shadow-sm" />
                  <span className="h-[3px] w-6 rounded bg-green-600" />
                </span>
                +91
              </span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className={`${inputClassName} border-0 p-0`}
                required
              />
            </Field>

            <Field>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter company name"
                className={inputClassName}
                required
              />
            </Field>

            <Field>
              <select
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                className={selectClassName}
                required
              >
                <option value="">Select Domain</option>
                {domainOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>

            <Field>
              <input
                type="number"
                min="1"
                name="candidateCount"
                value={formData.candidateCount}
                onChange={handleChange}
                placeholder="Enter No. of candidates"
                className={inputClassName}
                required
              />
            </Field>

            <Field>
              <select
                name="deliveryMode"
                value={formData.deliveryMode}
                onChange={handleChange}
                className={selectClassName}
                required
              >
                <option value="">Select Mode of Delivery *</option>
                {deliveryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>

            <Field>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Eg: Gurgaon, Delhi, India"
                className={inputClassName}
                required
              />
            </Field>

            {status.message ? (
              <p
                className={`text-sm ${
                  status.type === "success"
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-red-500 dark:text-red-400"
                }`}
              >
                {status.message}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-[0.7rem] bg-[#2f7ae5] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#2569c9] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({ children, className = "" }) {
  return (
    <label
      className={`flex border-b border-slate-300 pb-2.5 dark:border-slate-600 ${className}`}
    >
      {children}
    </label>
  );
}

const inputClassName =
  "w-full bg-transparent text-base text-slate-800 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-400";

const selectClassName =
  "w-full bg-transparent text-base text-slate-800 outline-none dark:text-white";
