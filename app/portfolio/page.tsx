"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredProjects = projects.filter(project => 
    activeTab === "all" ? true : project.category === activeTab
  )

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Portfolio</h1>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="web-design">Web design</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="web-development">Web development</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const projects = [
  {
    title: "Finance",
    category: "web-development",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "Orizon",
    category: "web-development",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "Fundo",
    category: "web-design",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "Brawlhalla",
    category: "applications",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "DSM.",
    category: "web-design",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "MetaSpark",
    category: "web-design",
    image: "/placeholder.svg?height=300&width=400"
  }
]

