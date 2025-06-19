import { MapPin, Calendar } from 'lucide-react'
import { navItems } from '@/lib/navigation'
import { config } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-max section-padding py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-montserrat font-semibold text-xl mb-4">
              Coaching Professionnel
            </h3>
            <p className="text-blue-100 leading-relaxed">
              {"L'équipe inspire, le leader respire"}
            </p>
          </div>

          <div>
            <h4 className="font-montserrat font-medium mb-4">Navigation</h4>
            <ul className="space-y-2 text-blue-100">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-medium mb-4">Contact</h4>
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
                  className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-lg font-montserrat font-medium hover:bg-gray-100 transition-colors text-sm"
                >
                  <Calendar size={16} />
                  Réserver un créneau
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-600 mt-12 pt-8 text-center text-blue-100">
          <p>&copy; 2025 Coaching Professionnel. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
