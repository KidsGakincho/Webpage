"use client";

import { FormEvent } from "react";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO:
    // APIなどにフォームデータを送信する
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.heading}>
          <p className={styles.label}>
            CONTACT
          </p>

          <h1 className={styles.title}>
            お問い合わせ
          </h1>

          <p className={styles.description}>
            制作に関するご相談やお問い合わせは、
            <br />
            以下のフォームよりお気軽にご連絡ください。
          </p>
        </div>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >

          <div className={styles.field}>
            <label htmlFor="name">
              お名前
              <span>必須</span>
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">
              メールアドレス
              <span>必須</span>
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="company">
              会社名
            </label>

            <input
              id="company"
              name="company"
              type="text"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">
              お問い合わせ内容
              <span>必須</span>
            </label>

            <textarea
              id="message"
              name="message"
              rows={8}
              required
            />
          </div>

          <button
            type="submit"
            className={styles.submit}
          >
            SEND
            <span>→</span>
          </button>

        </form>

      </div>
    </section>
  );
}