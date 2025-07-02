import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Medal, Map, Plane, Gem } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Medal />,
    title: "Our Vision",
    description:
      "To empower individuals with the skills, knowledge, and mindset needed to thrive in the independent digital workforce, creating a global community of successful freelance professionals. [cite: 2]",
  },
  {
    icon: <Map />,
    title: "Our Mission",
    description:
      "Our mission is to provide comprehensive, training that combines traditional education with practical experience, enabling our students to build successful freelance careers in their chosen fields. [cite: 3]",
  },
];

export const HumanIntuitionSection = () => {
  return (
    <section
      id="vision"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Welcome to{" "}
        <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
          Skilltrai
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Your gateway to a successful freelance career.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};