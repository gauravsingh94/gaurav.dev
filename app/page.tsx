"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, Github, GitPullRequest } from "lucide-react";
import { useState } from "react";
import "./styles.css";

interface Contribution {
  title: string;
  prNumber: number;
  date: string;
  description: string;
  url: string;
}

interface Organization {
  name: string;
  url: string;
  contributions: Contribution[];
}

const organizations: Organization[] = [
  {
    name: "processing/p5.js-web-editor",
    url: "https://github.com/processing/p5.js-web-editor",
    contributions: [
      {
        title: "Issue-#2923 added test for the Account Form.",
        prNumber: 2955,
        date: "2024-08-14",
        description:
          "I have added the test for Account from please review it. if these test feel good to you then i started to write for the other component as well.",
        url: "https://github.com/processing/p5.js-web-editor/pull/2955",
      },
      {
        title: "Fixes #2653, No Validation for sketch file rename ",
        prNumber: 2656,
        date: "2024-07-03",
        description:
          "Fixed validation for sketch file rename now it take only 100 characters as input.",
        url: "https://github.com/processing/p5.js-web-editor/pull/2656",
      },
    ],
  },
  {
    name: "PalisadoesFoundation/talawa-admin",
    url: "https://github.com/PalisadoesFoundation",
    contributions: [
      {
        title:
          "Fixed Issue #1285: Inconsistent character limit during organization creation.",
        prNumber: 1321,
        date: "2024-12-31",
        description:
          "Now we can enter only 50 character for the organization name and 200 for the organization description and location.",
        url: "https://github.com/PalisadoesFoundation/talawa-admin/pull/1321",
      },
      {
        title:
          "Fixed-Issue-#1307 User Dropdown in Navbar Not Redirecting Properly.",
        prNumber: 1313,
        date: "2024-12-29",
        description: "Fixed the Dropdown in Navbar Not Redirecting Properly.",
        url: "https://github.com/PalisadoesFoundation/talawa-admin/pull/1313",
      },
      {
        title:
          "Fixed-Issue-#1259 Keeping the message in design when no posts is found.",
        prNumber: 1265,
        date: "2024-12-24",
        description: "Added some css to make the design uniform.",
        url: "https://github.com/PalisadoesFoundation/talawa-admin/pull/1265",
      },
    ],
  },
];

export default function OpenSourcePage() {
  return (
    <div className="space-y-8 max-w-[90%] md:max-w-[85%] lg:max-w-[100%] mx-auto">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        Open Source Contributions
      </h1>
      <div className="space-y-6">
        {organizations.map((org, index) => (
          <OrganizationCard key={index} organization={org} index={index} />
        ))}
      </div>
    </div>
  );
}

function OrganizationCard({
  organization,
  index,
}: {
  organization: Organization;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(index === 0);

  return (
    <Card>
      <CardHeader
        className="cursor-pointer bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Github className="h-4 md:h-5 w-4 md:w-5" />
            <span className="text-base md:text-lg lg:text-xl">
              {organization.name}
            </span>
          </div>
          {isExpanded ? (
            <ChevronUp className="h-4 md:h-5 w-4 md:w-5" />
          ) : (
            <ChevronDown className="h-4 md:h-5 w-4 md:w-5" />
          )}
        </CardTitle>
      </CardHeader>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={{
              expanded: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <CardContent className="pt-4">
              <div className="relative contribution-timeline">
                {organization.contributions.map((contribution, index) => (
                  <ContributionItem key={index} contribution={contribution} />
                ))}
              </div>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}

function ContributionItem({ contribution }: { contribution: Contribution }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-6 last:mb-0 pl-6 contribution-item"
    >
      <div className="space-y-2">
        <h3 className="font-semibold text-sm md:text-base lg:text-lg">
          {contribution.title}
        </h3>
        <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
          <Badge
            variant="outline"
            className="bg-green-500/10 text-green-600 hover:bg-green-500/20"
          >
            <GitPullRequest className="h-3 w-3 mr-1" />#{contribution.prNumber}
          </Badge>
          <span>{contribution.date}</span>
        </div>
        <p className="text-xs md:text-sm text-muted-foreground">
          {contribution.description}
        </p>
        <Button variant="outline" size="sm" asChild>
          <a href={contribution.url} target="_blank" rel="noopener noreferrer">
            View Pull Request
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
