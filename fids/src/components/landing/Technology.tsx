"use client";

import * as React from "react";
import { Cpu, ShieldCheck, Cloud, Zap } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export function Technology() {
    const { t } = useTranslation();

    const techItems = [
        {
            title: t('tech_item_1_title'),
            desc: t('tech_item_1_desc'),
            icon: Cpu,
            color: "text-blue-500"
        },
        {
            title: t('tech_item_2_title'),
            desc: t('tech_item_2_desc'),
            icon: ShieldCheck,
            color: "text-green-500"
        },
        {
            title: t('tech_item_3_title'),
            desc: t('tech_item_3_desc'),
            icon: Cloud,
            color: "text-primary"
        }
    ];

    return (
        <section id="technology" className="py-24 bg-background relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest">{t('tech_badge')}</h2>
                    <h3 className="text-4xl lg:text-5xl font-black text-text-primary leading-tight">
                        {t('tech_title')}
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {techItems.map((item, i) => (
                        <div key={i} className="relative group">
                            <div className="absolute -inset-4 rounded-3xl bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative space-y-6">
                                <div className="h-16 w-16 rounded-2xl bg-white shadow-xl shadow-gray-200/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <item.icon className={item.color} size={32} />
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-xl font-bold text-text-primary">{item.title}</h4>
                                    <p className="text-text-secondary font-medium leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="pt-4 flex items-center gap-2 text-sm font-black text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2">
                                    En savoir plus <Zap size={14} fill="currentColor" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sophisticated System Architecture Visualization */}
                <div className="mt-24 rounded-[4rem] bg-sidebar p-2 sm:p-6 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden border border-white/5 relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/10 opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />
                    <div className="relative rounded-[3.5rem] bg-[#020617] overflow-hidden aspect-[21/9] flex items-center justify-center border border-white/5">
                        
                        {/* Animated Grid Background */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none">
                            <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px] animate-[pulse_8s_infinite]" />
                        </div>

                        {/* Interactive Data Nodes Visualization */}
                        <div className="relative w-full h-full flex items-center justify-center scale-75 sm:scale-100">
                            {/* Central Core Node */}
                            <div className="relative z-20">
                                <div className="absolute inset-0 bg-primary/40 blur-3xl animate-pulse" />
                                <div className="h-28 w-28 rounded-full bg-primary/10 border-2 border-primary/30 backdrop-blur-3xl flex items-center justify-center relative overflow-hidden group/core">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-transparent opacity-20 animate-spin-slow" />
                                    <img src="/favicon.ico" className="w-12 h-12 relative z-10 invert opacity-80" alt="Core" />
                                </div>
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono text-primary font-black tracking-[0.4em] uppercase">
                                    Supply Chain Core
                                </div>
                            </div>

                            {/* Orbiting Distributor Nodes */}
                            {[0, 120, 240].map((deg, i) => (
                                <div 
                                    key={i}
                                    className="absolute inset-0 animate-[spin_20s_linear_infinite]"
                                    style={{ transform: `rotate(${deg}deg)` }}
                                >
                                    <div 
                                        className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-[150px] animate-[spin_20s_linear_infinite_reverse]"
                                    >
                                        <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center relative group/node hover:border-secondary transition-colors duration-500">
                                            <div className="absolute inset-0 bg-secondary/20 blur-xl opacity-0 group-hover/node:opacity-100 transition-opacity" />
                                            <ShieldCheck className="text-white/40 group-hover/node:text-secondary transition-colors" size={24} />
                                            
                                            {/* Data Lines (SVG) */}
                                            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] overflow-visible pointer-events-none -z-10">
                                                <line 
                                                    x1="0" y1="0" x2="-200" y2="0" 
                                                    className="stroke-white/10 stroke-[1px] dash-animated"
                                                    style={{ transform: `rotate(${-deg}deg)` }} 
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Floating Metadata Pills */}
                            <div className="absolute top-10 left-10 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md space-y-2 animate-bounce-subtle">
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
                                    <div className="text-[10px] font-mono text-white/40 uppercase">System Integrity</div>
                                </div>
                                <div className="text-xs font-black text-white tracking-widest">ENCRYPTED</div>
                            </div>

                            <div className="absolute bottom-10 right-10 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md space-y-2 animate-bounce-subtle delay-700">
                                <div className="text-[10px] font-mono text-primary/60 uppercase">Real-time Latency</div>
                                <div className="text-xl font-black text-white tracking-widest">24ms</div>
                            </div>
                        </div>

                        {/* Top Label */}
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center space-y-1">
                            <div className="text-white/20 text-[9px] font-mono uppercase tracking-[0.6em]">Proprietary Distribution Engine v3.0</div>
                            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
