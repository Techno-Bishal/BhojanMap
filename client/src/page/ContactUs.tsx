import { useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");
    setTimeout(() => {
      // Simulate success
      setLoading(false);
      setSuccessMsg("Thank you for contacting us! We will get back to you shortly.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 my-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Get in Touch</h2>
          <p className="text-gray-700">
            Have questions or want to book a table? Reach out to us!
          </p>

          <div>
            <h3 className="font-semibold">Address</h3>
            <p>Kathmandu , Anamnagar</p>
          </div>
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p>+977 1234567890</p>
          </div>
          <div>
            <h3 className="font-semibold">Email</h3>
            <p>support@bhojanmap.com</p>
          </div>

          <div>
            <h3 className="font-semibold">Follow Us</h3>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="#" className="text-pink-600 hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
          />

          {successMsg && <p className="text-green-600 font-semibold">{successMsg}</p>}
          {errorMsg && <p className="text-red-600 font-semibold">{errorMsg}</p>}

          <Button type="submit" disabled={loading} className="bg-green-600 hover:bg-green-700">
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
