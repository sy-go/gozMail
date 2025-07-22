'use client';
import { useState } from 'react';

export  function SendMailForm() {
  const [form, setForm] = useState({
    sender_email: '',
    recipient_email: '',
    subject: '',
    body: '',
    is_html: false,
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value, type } = e.target;
  if (type === 'checkbox') {
    setForm(prev => ({
      ...prev,
      [name]: (e.target as HTMLInputElement).checked,
    }));
  } else {
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  }
};


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    const res = await fetch('/api/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus('Email sent!');
      setForm({ sender_email: '', recipient_email: '', subject: '', body: '', is_html: false });
    } else {
      setStatus('Failed to send.');
    }
  };

  return (
    <form className="space-y-4 max-w-md mx-auto" onSubmit={handleSubmit}>
      <input
        name="sender_email"
        type="email"
        placeholder="Your email"
        className="w-full p-2 border rounded"
        value={form.sender_email}
        onChange={handleChange}
        required
      />
      <input
        name="recipient_email"
        type="email"
        placeholder="Recipient's email"
        className="w-full p-2 border rounded"
        value={form.recipient_email}
        onChange={handleChange}
        required
      />
      <input
        name="subject"
        type="text"
        placeholder="Subject"
        className="w-full p-2 border rounded"
        value={form.subject}
        onChange={handleChange}
      />
      <textarea
        name="body"
        placeholder="Message"
        className="w-full p-2 border rounded"
        rows={5}
        value={form.body}
        onChange={handleChange}
      />
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="is_html"
          checked={form.is_html}
          onChange={handleChange}
        />
        Send as HTML
      </label>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Send
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}
