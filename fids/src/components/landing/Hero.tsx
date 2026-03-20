"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play, Server, Shield, Globe } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-sidebar">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/images/hero-bg.png" 
                    alt="AgriFlow Hero" 
                    className="h-full w-full object-cover opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-sidebar/60 via-sidebar/20 to-sidebar" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-bold text-secondary">
                        <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
                        Technologie Agricole de Pointe
                    </div>
                    
                    <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                        Révolutionner la <br />
                        <span className="text-secondary">Distribution Agricole</span> <br />
                        en Afrique
                    </h1>
                    
                    <p className="max-w-xl text-lg lg:text-xl text-white/70 font-medium leading-relaxed">
                        AgriFlow optimise la chaîne d'approvisionnement des semences et engrais pour des milliers de producteurs à travers le Burkina Faso et l'Afrique de l'Ouest.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Link href="/login" className="w-full sm:w-auto">
                            <Button className="h-14 px-10 text-lg font-bold w-full shadow-2xl shadow-primary/40 hover:scale-105 transition-transform">
                                Démarrer l'expérience <ArrowRight className="ml-2" size={20} />
                            </Button>
                        </Link>
                        <Button variant="ghost" className="h-14 px-8 text-white font-bold hover:bg-white/10 gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                                <Play size={16} fill="white" />
                            </div>
                            Voir la démo
                        </Button>
                    </div>

                    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                        {[
                            { label: 'Producteurs', value: '300+' },
                            { label: 'Pays', value: '10+' },
                            { label: 'Livraisons', value: '5k+' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="text-2xl font-black text-white">{stat.value}</div>
                                <div className="text-xs font-bold text-white/40 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dashboard Preview / Floating Card */}
                <div className="flex-1 relative animate-in zoom-in fade-in duration-1000 delay-500">
                    <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-2xl shadow-2xl">
                        <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-primary/50 to-secondary/50 opacity-20 blur-2xl" />
                        <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] p-2 aspect-[4/3] flex flex-col">
                            {/* Fake Menu */}
                            <div className="flex items-center justify-between p-4 border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="h-3 w-3 rounded-full bg-red-500/50" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                                    <div className="h-3 w-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="h-4 w-32 rounded bg-white/5" />
                                <div className="h-6 w-6 rounded-full bg-primary/20" />
                            </div>
                            {/* Fake Content */}
                            <div className="flex-1 p-6 space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-24 rounded-xl bg-white/5 border border-white/5 p-4 space-y-2">
                                        <div className="h-3 w-12 rounded bg-secondary/30" />
                                        <div className="h-8 w-16 rounded bg-white/10" />
                                    </div>
                                    <div className="h-24 rounded-xl bg-white/5 border border-white/5 p-4 space-y-2">
                                        <div className="h-3 w-12 rounded bg-accent/30" />
                                        <div className="h-8 w-16 rounded bg-white/10" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-3 w-full rounded bg-white/5" />
                                    <div className="h-3 w-[80%] rounded bg-white/5" />
                                    <div className="h-3 w-[60%] rounded bg-primary/20" />
                                </div>
                                <div className="h-32 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 relative overflow-hidden">
                                     <div className="absolute inset-x-0 bottom-0 h-1/2 bg-secondary/10 blur-xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute -top-6 -right-6 h-20 w-20 rounded-2xl bg-accent p-4 shadow-2xl animate-bounce-subtle">
                        <Shield className="text-white h-full w-full" />
                    </div>
                    <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-2xl flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                            <Globe size={24} />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-text-secondary">Statut</div>
                            <div className="text-sm font-black text-text-primary">Système Actif</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-0" />
        </section>
    );
}
