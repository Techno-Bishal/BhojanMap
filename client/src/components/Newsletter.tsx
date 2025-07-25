import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Integrate with backend or email marketing API here
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-orange-50 my-20 text-center">
      <h2 className="text-2xl font-semibold mb-3">Subscribe to our Newsletter</h2>
      <p className="mb-5 text-gray-700">Get latest deals, updates, and tasty offers!</p>
      <div className="flex justify-center gap-3">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full max-w-sm"
        />
        <Button onClick={handleSubscribe} className="bg-green-600 hover:bg-green-700">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;
