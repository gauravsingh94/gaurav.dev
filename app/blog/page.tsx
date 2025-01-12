import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Blog</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <Card key={index} className="overflow-hidden">
            <Link href={`/blog/${post.slug}`}>
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </div>
              </CardHeader>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

const blogPosts = [
  {
    title: "Design Conferences in 2022",
    slug: "design-conferences-2022",
    category: "Design",
    date: "Feb 23, 2022",
    image: "/placeholder.svg?height=400&width=600",
    excerpt: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo."
  },
  {
    title: "Best Fonts Every Designer",
    slug: "best-fonts-every-designer",
    category: "Design",
    date: "Feb 23, 2022",
    image: "/placeholder.svg?height=400&width=600",
    excerpt: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi."
  },
  {
    title: "Design Systems in 2022",
    slug: "design-systems-2022",
    category: "Design",
    date: "Feb 23, 2022",
    image: "/placeholder.svg?height=400&width=600",
    excerpt: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus."
  },
  {
    title: "The Future of Web Design",
    slug: "future-of-web-design",
    category: "Design",
    date: "Feb 23, 2022",
    image: "/placeholder.svg?height=400&width=600",
    excerpt: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit."
  }
]

