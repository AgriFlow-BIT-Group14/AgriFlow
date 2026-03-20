"use client";

import * as React from "react";
import Link from "next/link";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
            isScrolled ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100" : "bg-transparent"
        )}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                        <Leaf className="text-white" size={24} />
                    </div>
                    <span className={cn(
                        "text-2xl font-black tracking-tight transition-colors",
                        isScrolled ? "text-text-primary" : "text-white"
                    )}>
                        Agri<span className="text-secondary">Flow</span>
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {['Solutions', 'Impact', 'Technologie', 'A propos'].map((item) => (
                        <Link 
                            key={item} 
                            href="#" 
                            className={cn(
                                "text-sm font-bold transition-all hover:text-secondary",
                                isScrolled ? "text-text-secondary" : "text-white/80"
                            )}
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/login">
                        <Button 
                            variant={isScrolled ? "outline" : "ghost"} 
                            className={cn(
                                "font-bold h-10 px-6",
                                !isScrolled && "text-white hover:bg-white/10"
                            )}
                        >
                            Connexion
                        </Button>
                    </Link>
                    <Link href="/login">
                        <Button className="font-bold h-10 px-6 shadow-lg shadow-primary/20">
                            Démarrer
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
