import { MessageCircle } from "lucide-react";
import "../styles/WhatsAppButton.css";

function WhatsAppButton() {
  const phone = "918830647567";

  const message = encodeURIComponent(
    "Hello Surveilix Technologies, I would like to know more about your services."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={30} />
    </a>
  );
}

export default WhatsAppButton;