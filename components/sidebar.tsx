import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { AnimatedResumeButton } from "./resumeButton";

export function Sidebar() {
  return (
    <Card className="h-[94vh] sticky top-0  border-r lg:block hidden rounded-xl">
      <div className="flex flex-col items-center p-6 border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent rounded-xl" />
        <Avatar className="w-32 h-32 mb-4">
          <AvatarImage src="/profile.png" alt="Richard hanrick" />
          <AvatarFallback>GS</AvatarFallback>
        </Avatar>
        <h2 className="text-2xl font-bold">Gaurav Singh</h2>
        <p className="text-muted-foreground">Software Developer</p>
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4 text-purple-500" />
            <span>gauravrajputsingh94@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4 text-purple-500" />
            <span>+91 8887924382</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-purple-500" />
            <span>01 July, 2004</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-purple-500" />
            <span>Uttra Pradesh, India</span>
          </div>
        </div>

        <div className="flex justify-center gap-2 pt-4">
          <a
            href="https://github.com/gauravsingh94"
            className="hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://x.com/gauravsingh100x"
            className="hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/gaurav-singh-a632a1231/"
            className="hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="px-6 pb-6">
        <AnimatedResumeButton />
      </div>
    </Card>
  );
}
