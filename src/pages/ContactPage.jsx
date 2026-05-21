import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Contact Us</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">We&apos;d love to hear from you</p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <form className="card-base space-y-6 p-8" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-sm font-medium">Name</label>
              <input type="text" className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 dark:border-gray-700 dark:bg-gray-800" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input type="email" className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 dark:border-gray-700 dark:bg-gray-800" placeholder="you@email.com" />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea rows={5} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 dark:border-gray-700 dark:bg-gray-800" placeholder="How can we help?" />
            </div>
            <button type="submit" className="btn-primary w-full">
              <Send className="h-5 w-5" /> Send Message
            </button>
          </form>

          <div className="space-y-6">
            {[
              { icon: MapPin, title: "Address", text: "123 Food Street, Bandra West, Mumbai 400050" },
              { icon: Phone, title: "Phone", text: "+91 98765 43210" },
              { icon: Mail, title: "Email", text: "hello@foodbox.in" },
            ].map((item) => (
              <div key={item.title} className="card-base flex gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-green/10">
                  <item.icon className="h-6 w-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
