import { MapPin, Calendar } from "lucide-react";
import { navItems } from "@/lib/navigation";
import { config } from "@/lib/config";
import { Button } from "./ui/button";
import Link from "next/link";
import Substack from "./icons/substack";
import LinkedIn from "./icons/linked-in";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-max section-padding py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-montserrat mb-4 text-xl font-semibold">
              Thierry | Coach Professionnel
            </h3>
            <p className="leading-relaxed text-blue-100">
              Transformez votre expertise technique en impact visible
            </p>
            <div className="flex-items flex">
              <Button size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/tmalo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn color="text-white" />
                </Link>
              </Button>
              <Button size="icon" asChild>
                <Link
                  href="https://thierrymalo.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Substack />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-montserrat mb-4 font-medium">Navigation</h4>
            <ul className="space-y-2 text-blue-100">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat mb-4 font-medium">Contact</h4>
            <div className="space-y-4 text-blue-100">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Paris et région parisienne</span>
              </div>

              <div className="pt-2">
                <a
                  href={config.calComUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-montserrat inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100"
                >
                  <Calendar size={16} />
                  Réserver un créneau
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-blue-600 pt-8 text-center text-blue-100">
          <p>&copy; 2025 Coaching Professionnel. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
