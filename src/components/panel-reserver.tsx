import type React from "react";

import { MapPin, Calendar, Clock, Video } from "lucide-react";
import { config } from "@/lib/config";

export function PanelReserver() {
  return (
    <div className="from-primary/5 to-primary/10 mb-8 rounded-2xl bg-gradient-to-br p-8">
      <div className="mb-6 flex items-center gap-4">
        <div className="bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full">
          <Calendar className="text-primary" size={24} />
        </div>
        <div>
          <h3 className="font-montserrat text-xl font-semibold">
            Réservation en ligne
          </h3>
          <p className="text-gray-600">
            Choisissez le créneau qui vous convient
          </p>
        </div>
      </div>

      <div className="mb-6 space-y-4">
        <div className="flex items-center gap-3 text-gray-700">
          <Clock size={16} className="text-primary" />
          <span>Premier entretien gratuit de 30 minutes</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <Video size={16} className="text-primary" />
          <span>Visioconférence ou rencontre en présentiel</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <MapPin size={16} className="text-primary" />
          <span>Paris et région parisienne</span>
        </div>
      </div>

      <a
        href={config.calComUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary font-montserrat hover:bg-primary/90 inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-colors"
      >
        <Calendar size={20} />
        Réserver mon créneau gratuit
      </a>
    </div>
  );
}
