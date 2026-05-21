import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { CreditCard, MapPin, Check } from "lucide-react";
import { useState } from "react";


export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 pt-28 dark:bg-gray-950">
        <div className="card-base max-w-md p-12 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-green text-white">
            <Check className="h-8 w-8" />
          </div>
          <h1 className="mt-6 text-2xl font-bold">Order Placed!</h1>
          <p className="mt-2 text-gray-500">Your FOODBOX will arrive soon.</p>
          <Link to="/track" className="btn-primary mt-8 inline-flex">
            Track Order
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 pt-28 dark:bg-gray-950">
        <p className="text-gray-600 dark:text-gray-400">Your cart is empty.</p>
        <Link to="/meal-kits" className="btn-primary mt-6">
          Browse Meal Kits
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 pb-20 lg:px-8">
        <h1 className="text-3xl font-bold">Checkout</h1>

        <div className="mt-8 flex gap-2">
          {["Address", "Payment", "Review"].map((s, i) => (
            <div
              key={s}
              className={`flex-1 rounded-full py-2 text-center text-sm font-medium ${
                step > i ? "bg-brand-green text-white" : step === i + 1 ? "bg-brand-orange text-white" : "bg-gray-200 dark:bg-gray-800"
              }`}
            >
              {i + 1}. {s}
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-3">
            {step === 1 && (
              <div className="card-base p-6">
                <h2 className="flex items-center gap-2 font-bold">
                  <MapPin className="h-5 w-5 text-brand-green" /> Delivery Address
                </h2>
                <input className="mt-4 w-full rounded-xl border px-4 py-3 dark:border-gray-700 dark:bg-gray-800" placeholder="Street address" />
                <input className="mt-3 w-full rounded-xl border px-4 py-3 dark:border-gray-700 dark:bg-gray-800" placeholder="City, PIN code" />
                <button type="button" onClick={() => setStep(2)} className="btn-primary mt-6">
                  Continue to Payment
                </button>
              </div>
            )}
            {step === 2 && (
              <div className="card-base p-6">
                <h2 className="flex items-center gap-2 font-bold">
                  <CreditCard className="h-5 w-5 text-brand-green" /> Payment
                </h2>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {["UPI", "Card", "COD"].map((m) => (
                    <button key={m} type="button" className="rounded-xl border-2 border-brand-green bg-brand-green/5 py-3 font-medium dark:border-brand-green-light">
                      {m}
                    </button>
                  ))}
                </div>
                <button type="button" onClick={() => setStep(3)} className="btn-primary mt-6">
                  Review Order
                </button>
              </div>
            )}
            {step === 3 && (
              <div className="card-base p-6">
                <h2 className="font-bold">Order Summary</h2>
                <ul className="mt-4 space-y-3">
                  {items.map((item) => (
                    <li key={item.kit.id} className="flex justify-between text-sm">
                      <span>
                        {item.kit.name} × {item.quantity}
                      </span>
                      <span>₹{item.kit.price * item.quantity}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => {
                    clearCart();
                    setDone(true);
                  }}
                  className="btn-primary mt-6 w-full"
                >
                  Place Order — ₹{total + 40}
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="card-base sticky top-32 p-6">
              <h3 className="font-bold">Your Items</h3>
              {items.map((item) => (
                <div key={item.kit.id} className="mt-4 flex gap-3">
                  <img
                    src={item.kit.image}
                    alt=""
                    className="h-12 w-12 rounded-lg object-cover"
                    width={48}
                    height={48}
                  />
                  <div className="flex-1 text-sm">
                    <p className="font-medium">{item.kit.name}</p>
                    <p className="text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium">₹{item.kit.price * item.quantity}</p>
                </div>
              ))}
              <div className="mt-6 space-y-2 border-t pt-4 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>₹40</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-brand-green">₹{total + 40}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
