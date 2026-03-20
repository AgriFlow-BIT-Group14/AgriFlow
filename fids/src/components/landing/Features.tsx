"use client";

import * as React from "react";
import { Package, Truck, PieChart, Users, Smartphone, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Gestion d'Inventaire Intelligente",
        desc: "Suivez vos stocks de semences et d'engrais en temps réel avec des alertes de seuil critique.",
        icon: Package,
        color: "bg-primary/10 text-primary"
    },
    {
        title: "Distribution Traçable",
        desc: "Coordonnez la logistique et suivez chaque livraison de l'entrepôt jusqu'au producteur.",
        icon: Truck,
        color: "bg-secondary/10 text-secondary"
    },
    {
        title: "Analyses de Performance",
        desc: "Visualisez l'impact de la distribution par pays avec des rapports détaillés et prédictifs.",
        icon: PieChart,
        color: "bg-accent/10 text-accent"
    },
    {
        title: "Réseau de Producteurs",
        desc: "Gérez une base de données complète de producteurs avec leur historique et besoins spécifiques.",
        icon: Users,
        color: "bg-blue-50 text-blue-600"
    },
    {
        title: "Interface Mobile First",
        desc: "Accédez à vos données partout. Optimisé pour une utilisation sur le terrain.",
        icon: Smartphone,
        color: "bg-purple-50 text-purple-600"
    },
    {
        title: "Sécurité & Contrôle",
        desc: "Permissions basées sur les rôles (Admin, Distributeur, Producteur) pour une sécurité maximale.",
        icon: ShieldCheck,
        color: "bg-green-50 text-green-700"
    }
];

export function Features() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest">Fonctionnalités Clés</h2>
                    <h3 className="text-4xl lg:text-5xl font-black text-text-primary leading-tight">
                        Tout ce dont vous avez besoin pour <span className="text-primary italic">nourrir l'Afrique</span>.
                    </h3>
                    <p className="text-text-secondary text-lg font-medium">
                        Une plateforme intégrée pour transformer la chaîne de valeur agricole avec des données fiables et une gestion optimisée.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <div 
                            key={i} 
                            className="group p-8 rounded-3xl bg-surface border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className={cn("h-14 w-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", f.color)}>
                                <f.icon size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-text-primary mb-3">{f.title}</h4>
                            <p className="text-text-secondary font-medium leading-relaxed">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Subtle decorative elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 blur-[150px] rounded-full -z-10" />
        </section>
    );
}
