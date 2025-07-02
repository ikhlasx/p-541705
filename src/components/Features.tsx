import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
  details: string[];
  duration: string;
}

const features: FeatureProps[] = [
  {
    title: "Design and Digital Marketing",
    description: "Professional Certificate Course",
    details: ["UI/UX Design", "Graphic Design", "Social Media Marketing", "SEO", "Content Strategy"],
    duration: "16 weeks"
  },
  {
    title: "AI Developer",
    description: "Professional Certificate Course",
    details: ["Python", "GenAI", "MLOps", "Automation", "Developing AI Applications"],
    duration: "24 weeks"
  },
  {
    title: "AI Engineering",
    description: "Professional Certificate Course",
    details: ["Python", "Machine Learning", "Neural Networks", "NLP", "Computer Vision"],
    duration: "32 weeks"
  },
  {
    title: "Data Analyst",
    description: "Professional Certificate Course",
    details: ["Data Wrangling", "EDA", "Excel", "Statistical Analysis", "SQL"],
    duration: "24 weeks"
  },
  {
    title: "Robotics and IoT Specialization",
    description: "Certificate Course",
    details: ["IoT Protocols", "Control Systems", "Robotics Design", "Embedded Systems"],
    duration: "28 weeks"
  },
  {
    title: "Content Creator",
    description: "Professional Certificate Course",
    details: ["Content Strategy", "Video Production", "AI Tools", "Social Media Management"],
    duration: "12 weeks"
  },
];

export const Features = () => {
  return (
    <section
      id="courses"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">Course Catalog</h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Explore our industry-relevant courses designed to build your professional excellence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, details, duration }) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2">{description}</p>
              <ul className="list-disc list-inside text-left">
                {details.map(item => <li key={item}>{item}</li>)}
              </ul>
            </CardContent>
            <CardFooter>
              <p>Duration: {duration} (includes freelance training & internship)</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;