import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Globe } from "lucide-react";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div className="space-y-8">
      <h1 className="lg:text-3xl text-xl font-bold">Projects</h1>

      {/* <TabsList>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="web-design">Web design</TabsTrigger>
        <TabsTrigger value="applications">Applications</TabsTrigger>
        <TabsTrigger value="web-development">Web development</TabsTrigger>
      </TabsList> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden group">
            <CardContent className="p-0">
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  {project.liveLink && (
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white text-black hover:bg-purple-100 transition-colors duration-300"
                      asChild
                    >
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white text-black hover:bg-purple-100 transition-colors duration-300"
                      asChild
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {project.category}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    image: "/IssueTracker.png",
    title: "Issue Trackere",
    liveLink: "https://issue-tracker-alpha-murex.vercel.app/",
    githubLink: "https://github.com/yourusername/issue-tracker",
    category: "Web Application",
  },
  {
    image: "/Linear.png",
    title: "Rebuilding Linear",
    liveLink: "https://rebuild-linear.vercel.app",
    githubLink: "https://github.com/yourusername/rebuild-linear",
    category: "Web Application",
  },
];
