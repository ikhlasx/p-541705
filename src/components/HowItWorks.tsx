import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ClipboardCheck, UserCheck, School, PenSquare } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <PenSquare />,
    title: "Application",
    description:
      "Submit your application through our online portal.",
  },
  {
    icon: <ClipboardCheck />,
    title: "Assessment",
    description:
      "Complete a technical assessment to showcase your skills.",
  },
  {
    icon: <UserCheck />,
    title: "Interview",
    description:
      "Participate in an interview to discuss your goals and fit.",
  },
  {
    icon: <School />,
    title: "Enrollment",
    description:
      "Successful candidates will be enrolled in their chosen course.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="process"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold md:text-center">
        Our Admission Process 
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        A streamlined process to get you started on your freelance journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

export default HowItWorks;