import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ThinVeneerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V14C20 15.1046 19.1046 16 18 16H14L12 19L10 16H6C4.89543 16 4 15.1046 4 14V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ThinImplantIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 10V20M12 20H15M12 20H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 14H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ThinSparkleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 3L13.65 8.35L19 10L13.65 11.65L12 17L10.35 11.65L5 10L10.35 8.35L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 19L6 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 19L18 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ThinScanIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 8V6C4 4.89543 4.89543 4 6 4H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 16V18C4 19.1046 4.89543 20 6 20H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 4H18C19.1046 4 20 4.89543 20 6V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 20H18C19.1046 20 20 19.1046 20 18V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const treatments = [
  {
    icon: ThinVeneerIcon,
    title: "Porcelain Veneers",
    description: "Ultra-thin, custom-made shells of porcelain to transform your smile with minimal intervention.",
  },
  {
    icon: ThinImplantIcon,
    title: "Dental Implants",
    description: "A permanent, natural-looking solution to replace missing teeth and restore your smile's function.",
  },
  {
    icon: ThinSparkleIcon,
    title: "Facial Aesthetics",
    description: "Subtle enhancements to harmonize your features and complement your beautiful smile.",
  },
  {
    icon: ThinScanIcon,
    title: "Digital Orthodontics",
    description: "State-of-the-art clear aligners for a discreet and efficient path to perfectly straight teeth.",
  },
];

export default function Treatments() {
  return (
    <section id="treatments" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-medium">Our Signature Treatments</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We combine artistry and technology to deliver personalized solutions for your ideal smile.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {treatments.map((treatment) => (
            <Card key={treatment.title} className="text-left bg-transparent border shadow-sm hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                 <div className="bg-primary/10 p-3 rounded-md mt-1">
                  <treatment.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <CardTitle className="font-semibold text-lg">{treatment.title}</CardTitle>
                    <p className="text-muted-foreground pt-2">{treatment.description}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
