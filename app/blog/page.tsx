import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <h1 className="lg:text-3xl text-xl font-bold">Blog</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <Card
            key={index}
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
          >
            <Link target="_blank" href={post.link || `/blog/${post.slug}`}>
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
                  <p className="text-muted-foreground lg:text-sm text-xs">
                    {post.excerpt}
                  </p>
                </div>
              </CardHeader>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

const blogPosts = [
  {
    title: "Setting up MySql with MacOs",
    slug: "Setting up MySql with MacOs",
    category: "Tools Setup",
    date: "Sep 28, 2024",
    image: "/sqlBlog.png",
    excerpt:
      "A concise guide on setting up MySQL on macOS using Homebrew, including installation, running commands, and managing MySQL with aliases for starting and stopping the service. Learn to efficiently connect and control your MySQL server with minimal background processes.",
    link: "https://gauravsingherror.hashnode.dev/setting-up-mysql-with-macos",
  },
];
