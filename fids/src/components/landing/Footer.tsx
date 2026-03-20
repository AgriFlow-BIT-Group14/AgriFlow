"use client";

import * as React from "react";
import Link from "next/link";
import { Leaf, Twitter, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-sidebar text-white/70 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <Leaf className="text-secondary" size={28} />
                            <span className="text-2xl font-black text-white tracking-tight">
                                Agri<span className="text-secondary">Flow</span>
                            </span>
                        </Link>
                        <p className="text-sm font-medium leading-relaxed max-w-xs">
                            AgriFlow est une plateforme dédiée à l'optimisation de la chaîne d'approvisionnement agricole en Afrique.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                                <a key={i} href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {[
                        { title: 'Produit', links: ['Tableau de bord', 'Analyses', 'Inventaire', 'Livraisons'] },
                        { title: 'Entreprise', links: ['À propos', 'Impact', 'Blog', 'Carrières'] },
                        { title: 'Légal', links: ['Confidentialité', 'Conditions d\'utilisation', 'Cookies'] }
                    ].map((section) => (
                        <div key={section.title} className="space-y-6">
                            <h5 className="text-white font-black text-lg">{section.title}</h5>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm font-bold hover:text-white transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/20">
                    <p>© 2024 AgriFlow. Tous droits réservés.</p>
                    <p>Fait avec ❤️ pour l'Afrique.</p>
                </div>
            </div>
        </footer>
    );
}
