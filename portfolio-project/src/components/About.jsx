import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-2-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Dedicated and hard-working Software Engineer
                        </h3>

                        <p className="text-muted-foreground">
                            With 3+ years of experience in front-end development and working at startups, I specalize in working with
                            exstensive backend databases to create responsive and creative web applications.
                        </p>

                        <p className="text-muted-foreground">
                            I have a strong desire to challenge and grow as a software engineer, I like to constantly take on new
                            projects and get them past the finish line. I'm hoping to increase my skillset with new technologies
                            and methods.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>

                            <a href="/projects/Andres_Gordillo Engineer Resume.pdf" download="Andres Gordillo Resume.pdf" className="px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>

                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p--3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4>Web Development</h4>
                                    <p>
                                        I create responsive, user-focused websites and web applications using modern technologies like React, JavaScript, and CSS frameworks to deliver seamless digital experiences. My development approach emphasizes clean code, performance optimization, and intuitive design to help businesses connect with their audiences effectively.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p--3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4>UI/UX Design</h4>
                                    <p>
                                        I design intuitive user interfaces and craft seamless user experiences through research-driven design processes, wireframing, and prototyping that prioritize user needs and business goals. My approach combines visual design principles with usability testing to create digital products that are both aesthetically pleasing and functionally effective.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p--3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4>Projects</h4>
                                    <p>
                                        I love to take on difficult or not yet worked issues and push myself to learn and adapt to the problem at hand. I pride myself in always completing anything I set out to do and polish it to the best of my ability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}