"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import styles from "./ContactFormBlock.module.css";

export default function ContactFormBlock({ contactForm, studioInfo }) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    contactForm.fields.forEach((field) => {
      const val = (values[field.name] || "").trim();
      if (field.required && !val) {
        newErrors[field.name] = "This field is required.";
      } else if (
        field.type === "email" &&
        val &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
      ) {
        newErrors[field.name] = "Please enter a valid email address.";
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  };

  const getPlaceholder = (field) => {
    if (field.placeholder) return field.placeholder;
    if (field.required) return "Required";
    return undefined;
  };

  const renderField = (field) => {
    const hasError = !!errors[field.name];
    const errorId = `${field.name}-error`;
    const ariaProps = {
      ...(field.required && { required: true, "aria-required": "true" }),
      ...(hasError && { "aria-invalid": "true", "aria-describedby": errorId }),
    };

    let input;
    switch (field.type) {
      case "textarea":
        input = (
          <textarea
            id={field.name}
            name={field.name}
            className={`${styles.textarea} ${hasError ? styles.inputError : ""}`}
            value={values[field.name] || ""}
            onChange={(e) => handleChange(field.name, e.target.value)}
            rows={4}
            placeholder={getPlaceholder(field)}
            {...ariaProps}
          />
        );
        break;
      case "select":
        input = (
          <select
            id={field.name}
            name={field.name}
            className={`${styles.select} ${hasError ? styles.inputError : ""}`}
            value={values[field.name] || ""}
            onChange={(e) => handleChange(field.name, e.target.value)}
            {...ariaProps}
          >
            <option value="">&mdash;</option>
            {field.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        );
        break;
      default:
        input = (
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            className={`${styles.input} ${hasError ? styles.inputError : ""}`}
            value={values[field.name] || ""}
            onChange={(e) => handleChange(field.name, e.target.value)}
            placeholder={getPlaceholder(field)}
            {...ariaProps}
          />
        );
    }

    return (
      <div key={field.name} className={styles.field}>
        <label htmlFor={field.name} className={`text-tagline ${styles.label}`}>
          {field.label}
        </label>
        {input}
        {hasError && (
          <p id={errorId} className={styles.errorMessage} role="alert">
            {errors[field.name]}
          </p>
        )}
      </div>
    );
  };

  const mainFields = contactForm.fields.slice(0, -2);
  const inlineFields = contactForm.fields.slice(-2);

  return (
    <Section>
      <Container>
        <div className={styles.layout}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {mainFields.map(renderField)}
            <div className={styles.inlineRow}>
              {inlineFields.map(renderField)}
            </div>
            <div className={styles.submit}>
              <Button
                variant="primary"
                type="submit"
                className={styles.submitButton}
              >
                {contactForm.submitLabel} &rarr;
              </Button>
            </div>
          </form>

          <aside className={styles.studioCard}>
            <div className={styles.studioBlock}>
              <p className={`text-tagline ${styles.studioLabel}`}>
                {studioInfo.studio.label}
              </p>
              <div className={styles.studioLines}>
                {studioInfo.studio.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>

            <div className={styles.studioBlock}>
              <p className={`text-tagline ${styles.studioLabel}`}>
                {studioInfo.direct.label}
              </p>
              <a
                href={`mailto:${studioInfo.direct.email}`}
                className={styles.studioLink}
              >
                {studioInfo.direct.email}
              </a>
            </div>

            <div className={styles.studioBlock}>
              <p className={`text-tagline ${styles.studioLabel}`}>
                {studioInfo.press.label}
              </p>
              <a
                href={`mailto:${studioInfo.press.email}`}
                className={styles.studioLink}
              >
                {studioInfo.press.email}
              </a>
            </div>

            <div className={styles.studioBlock}>
              <p className={`text-tagline ${styles.studioLabel}`}>
                {studioInfo.social.label}
              </p>
              <div className={styles.studioLines}>
                {studioInfo.social.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href || "#"}
                    className={styles.studioLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
