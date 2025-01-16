import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Factory } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Background</h1>

        <Card>
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-500/20">
                <Factory className="w-5 h-5 text-purple-500" />
              </div>
              <CardTitle>Experience</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {ExperienceData.map((item, index) => (
              <div
                key={index}
                className="relative pl-6 border-l-2 border-border pb-6 last:pb-0"
              >
                <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-0" />
                <h3 className="font-semibold">{item.company}</h3>
                <p className="text-sm text-purple-500">{item.years}</p>
                <p className="text-muted-foreground mt-2">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-500/20">
                <Book className="w-5 h-5 text-purple-500" />
              </div>
              <CardTitle>Education</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="relative pl-6 border-l-2 border-border pb-6 last:pb-0"
              >
                <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-0" />
                <h3 className="font-semibold">{item.school}</h3>
                <p className="text-sm text-purple-500">{item.years}</p>
                <p className="text-muted-foreground mt-2">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

const educationData = [
  {
    school: "Galgotias University",
    years: "2021 — 2025",
    description:
      "I pursued a Bachelor's degree in Computer Science at Galgotias University located in Greater Noida, gaining comprehensive knowledge and hands-on experience in various aspects of computer science and programming",
  },
  {
    school: "JDS Public School",
    years: "2020 — 2021",
    description:
      "I completed my class 12 with PCM (Physics, Chemistry, Mathematics) from JDS Public School in Varanasi",
  },
  {
    school: "KVN Public School",
    years: "2018 — 2019",
    description: "I completed my class 10th from JDS Public School in Varanasi",
  },
];

const ExperienceData = [
  {
    company: "Snipe (Sde Intern)",
    years: "15 October — Current",
    description:
      "Currently working as a Software Development Engineer Intern at Snipe in Bangalore. Working remotely, I am gaining hands-on experience with their tech stack while collaborating with the engineering team on various projects",
  },
];
