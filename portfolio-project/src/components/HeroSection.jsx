import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">
                            Hello, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            {" "}
                            Andres
                        </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                            {""}
                            Gordillo
                        </span>

                    </h1>

                    <p className="text-large md:text-xl text-muted-forefround max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Mid Level Front-end engineer of 3+ years specializing in Angular, React, and Ruby on Rails, seeking front end
                        or full stack engineering opportunities. Designed scalable web architectures supporting 10,000+ monthly users;
                        implemented feedback systems that resolved critical application issues.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Noteable Projects
                        </a>
                    </div>

                </div>

            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>

        </section>
    )
}