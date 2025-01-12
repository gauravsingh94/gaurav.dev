import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Resume</h1>

        <Card>
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-500/20">
                <Book className="w-5 h-5 text-yellow-500" />
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
                <div className="absolute w-3 h-3 bg-yellow-500 rounded-full -left-[7px] top-0" />
                <h3 className="font-semibold">{item.school}</h3>
                <p className="text-sm text-yellow-500">{item.years}</p>
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
    school: "University School Of The Arts",
    years: "2007 — 2008",
    description:
      "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
  },
  {
    school: "New York Academy Of Art",
    years: "2006 — 2007",
    description:
      "Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..",
  },
  {
    school: "High School Of Art And Design",
    years: "2002 — 2004",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.",
  },
];
