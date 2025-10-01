"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "@/context/language-context";
import { translations } from "@/lib/data";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageHint: string;
  githubUrl: string;
  liveUrl?: string;
};

export function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  imageHint,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  const { language } = useContext(LanguageContext);
  const t = translations[language].projects;

  return (
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
      <CardHeader>
        <div className="aspect-video relative mb-4">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-md"
            data-ai-hint={imageHint}
          />
        </div>
        <CardTitle className="font-headline">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-sm">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-start gap-4">
        <Button asChild variant="outline">
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2" />
            Code
          </Link>
        </Button>
        {liveUrl && liveUrl !== "#" && (
            <Button asChild>
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2" />
                {t.liveDemo}
            </Link>
            </Button>
        )}
      </CardFooter>
    </Card>
  );
}
