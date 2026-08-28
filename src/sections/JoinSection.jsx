import React, { useState } from "react";
import { useForm } from "@formspree/react";
import { Lock } from "lucide-react";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Title from "../components/ui/SectionTitle";

export default function JoinSection() {
    const [state, handleSubmit] = useForm("meajogbr");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    if (state.succeeded) {
        return (
            <section
                id="como-participar"
                className="py-16 px-4 sm:px-6 lg:px-8"
            >
                <div className="max-w-xl mx-auto text-center bg-white p-8 rounded-2xl shadow-xl">
                    <h2 className="text-2xl font-bold text-text mb-4">
                        Você está na lista!
                    </h2>

                    <p className="text-text/80">
                        Obrigado pelo interesse. Entraremos em contato assim que
                        abrirmos novas vagas para o clube.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section id="como-participar" className="flex flex-col py-16 px-4 sm:px-6 lg:px-8 bg-support/40">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <Title variant="subtitle">Como Participar</Title>

                    <Card 
                        className="py-6 px-6 flex flex-col items-center justify-center gap-4"
                    >
                        <p className="text-text-text/80 mb-4 leading-relaxed">
                            O clube é <strong>100% gratuito</strong> e acontece exclusivamente pelo <strong>Telegram</strong>.
                        </p>
                        <p className="text-text-text/80 leading-relaxed flex items-center justify-center gap-2">
                            <Lock className="w-4 h-4 text-primary" />
                            Para manter a qualidade das discussões, o clube fica fechado durante o mês.
                        </p>
                    </Card>
                </div>

                <Card className="max-w-md mx-auto py-10 px-10 flex flex-col items-center justify-center gap-4">
                    <Title>Entre na Lista de Espera</Title>

                    <form onSubmit={handleSubmit} className="w-full space-y-4">
                        <div className="flex flex-col gap-4 w-full">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-text/80 mb-1">
                                    Nome completo
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    placeholder="Seu nome"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-text/80 mb-1">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-text/80 mb-1">
                                    Telefone (WhatsApp)
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    placeholder="(00) 00000-0000"
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full bg-primary text-white px-3 py-3 rounded-xl text-sm hover:bg-support hover:cursor-pointer"
                            >
                                {state.submitting ? "Enviando..." : "Entrar na lista"}
                            </Button>
                        </div>
                    </form>
                    <p className="text-xs text-center text-text/70 mt-4">
                        Avisaremos você assim que abrirmos novas vagas!
                    </p>
                </Card>
            </div>
        </section>
    )
}