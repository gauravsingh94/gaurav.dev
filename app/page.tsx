import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Pencil } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-8 border p-6 w-full rounded-xl">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">About Me</h1>
        <div className="text-muted-foreground space-y-4">
          <p>
            My name is Gaurav Singh. I am a full-stack web developer capable of
            building complex websites from scratch and deploying them. I love
            creating projects and enjoy turning complex problems into simple,
            beautiful, and intuitive designs.
          </p>
          <p>
            My job is to build your website so that it is functional and
            user-friendly but at the same time attractive. Moreover, I add
            personal touch to your product and make sure that is eye-catching
            and easy to use. My aim is to bring across your message and identity
            in the most creative way.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">What I'm Doing</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="space-y-1">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-500/20">
                <Pencil className="w-5 h-5 text-yellow-500" />
              </div>
              <CardTitle>Web Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-500/20">
                <Code className="w-5 h-5 text-yellow-500" />
              </div>
              <CardTitle>Web Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                High-quality development of sites at the professional level.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-500/20">
                <Database className="w-5 h-5 text-yellow-500" />
              </div>
              <CardTitle>Backend Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Professional development of server-side applications and APIs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-500/20">
                <Globe className="w-5 h-5 text-yellow-500" />
              </div>
              <CardTitle>Open Source</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I love contributing to open source projects and participating in
                the developer community.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
