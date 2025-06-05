import { ExternalLink } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Component Library",
        description: "Developed custom component library eliminating dependency on third-party frameworks. Created reusable HTML components with custom JavaScript logic for improved performance. Documented implementation patterns enabling adoption across development teams",
        image: "/projects/project1.png",
        tags: ["Angular", 'Bootstrap', 'AngularCLI', "Webpack"],
    },
    {
        id: 2,
        title: "Qiankun",
        description: "Implemented Qiankun to unify multiple repositories into a cohesive single-page application. Designed communication protocols between micro front-ends ensuring proper state  management. Created migration guides and implemented automated testing strategies improving system  reliability",
        image: "/projects/project2.png",
        tags: ["Qiankun", 'Angular', "Webpack"],
    },
    {
        id: 3,
        title: "Previous Portfolio",
        description: "This is a small portfolio that I created years ago in React, I like to keep this here to show the difference between my current one and my previous attempts.",
        image: "/projects/project3.png",
        tags: ["React", 'HTML', "CSS"],
        url: "https://andrescd-dev.github.io/portfolio/"
    },

]


export const ProjectsSections = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-2-5xl">
                <h2 className="text-3xl md:text-4xl font-bnold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto">
                    Here are some of my noteable projects and tasks that I have been able to be a part of in my previous roles and in the past.

                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-54 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-cs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>


                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {project.url ?
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                className="text-foregroun/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <ExternalLink size={20} />

                                            </a> : ''
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}