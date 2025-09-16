import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Code2,
  Briefcase,
  GraduationCap,
  Star,
  ArrowRight,
  Download,
  ExternalLink
} from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'Node.js & Express.js', level: 95 },
    { name: 'AngularJS & JavaScript', level: 90 },
    { name: 'AI Tools & GPT Integration', level: 88 },
    { name: 'Shopify Liquid', level: 85 },
    { name: 'WordPress Development', level: 82 },
    { name: 'UI/UX Design', level: 78 },
  ];

  const technologies = [
    'Node.js', 'Express.js', 'AngularJS', 'JavaScript', 'HTML5', 'CSS3',
    'REST APIs', 'Git', 'GPT Models', 'Automation Tools', 'WordPress', 'Shopify'
  ];

  const experiences = [
    {
      title: 'Web Developer',
      company: 'OpenDevs',
      location: 'Delhi',
      period: 'May 2020 – Feb 2022',
      achievements: [
        'Developed custom UI library increasing developer productivity',
        'Built web applications compatible with multiple browsers and devices',
        'Enhanced code reusability across development teams'
      ]
    },
    {
      title: 'Sales Associate (Telecaller)',
      company: 'IndiaMART',
      location: 'Remote / Onsite',
      period: 'Mar 2019 – Apr 2022',
      achievements: [
        'Successfully handled B2B sales calls generating new leads',
        'Consistently achieved monthly targets and maintained client relationships',
        'Utilized persuasive communication to increase revenue'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating-animation"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className={`relative z-10 text-center max-w-4xl mx-auto ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium mb-4">
              Available for Opportunities
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="hero-text">Bodhisatwa Deb</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Web Developer • Backend Developer • Physics Postgraduate
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional web experiences with modern technologies. 
            Specializing in full-stack development, AI integration, and scalable solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8 py-3 text-lg font-semibold group">
              <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg font-semibold">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold hero-text">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold hero-text">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold hero-text">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up stagger-1">
            <h2 className="text-4xl font-bold mb-4">
              <Code2 className="inline mr-3 h-8 w-8 text-primary" />
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proficient in modern web technologies and frameworks
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="fade-in-up stagger-2">
              <h3 className="text-2xl font-semibold mb-6">Core Competencies</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-3" />
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-in-up stagger-3">
              <h3 className="text-2xl font-semibold mb-6">Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="px-3 py-2 text-center justify-center hover:scale-105 transition-transform"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <Card className="mt-8 glow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="h-6 w-6 text-primary" />
                    <h4 className="text-lg font-semibold">Specializations</h4>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• AI Tools & GPT Integration</li>
                    <li>• E-commerce Solutions (Shopify)</li>
                    <li>• Custom UI Library Development</li>
                    <li>• Cross-browser Compatibility</li>
                    <li>• Team Leadership & Management</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up stagger-1">
            <h2 className="text-4xl font-bold mb-4">
              <Briefcase className="inline mr-3 h-8 w-8 text-primary" />
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional journey and key achievements
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className={`glow-card fade-in-up stagger-${index + 2}`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-muted-foreground mb-1">
                        <Calendar className="mr-2 h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up stagger-1">
            <h2 className="text-4xl font-bold mb-4">
              <GraduationCap className="inline mr-3 h-8 w-8 text-primary" />
              Education
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glow-card fade-in-up stagger-2">
              <CardHeader>
                <CardTitle>Master of Science (M.Sc.) in Physics</CardTitle>
                <p className="text-primary font-semibold">ICFAI University, Tripura</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="mr-2 h-4 w-4" />
                  2023 – 2025 (Current)
                </div>
                <p className="text-sm text-muted-foreground">
                  Advanced studies in Physics with focus on theoretical and applied physics
                </p>
              </CardContent>
            </Card>

            <Card className="glow-card fade-in-up stagger-3">
              <CardHeader>
                <CardTitle>Bachelor's Degree in Physics</CardTitle>
                <p className="text-primary font-semibold">RKM College, Kailashahar</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="mr-2 h-4 w-4" />
                  Aug 2020 – Aug 2023
                </div>
                <p className="text-sm text-muted-foreground">
                  Graduated with specialization in Physics
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in-up stagger-1">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="glow-card fade-in-up stagger-2">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-medium mb-1">Email</p>
                <p className="text-sm text-muted-foreground">bodhisatwadeb@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="glow-card fade-in-up stagger-3">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-medium mb-1">Phone</p>
                <p className="text-sm text-muted-foreground">+91 87941 83105</p>
              </CardContent>
            </Card>

            <Card className="glow-card fade-in-up stagger-4">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-medium mb-1">Location</p>
                <p className="text-sm text-muted-foreground">Tripura, India</p>
              </CardContent>
            </Card>

            <Card className="glow-card fade-in-up stagger-1">
              <CardContent className="p-6 text-center">
                <Github className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-medium mb-1">Portfolio</p>
                <p className="text-sm text-muted-foreground">View Projects</p>
              </CardContent>
            </Card>
          </div>

          <div className="fade-in-up stagger-2">
            <Button size="lg" className="px-8 py-3 text-lg font-semibold group">
              <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Start a Conversation
              <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Bodhisatwa Deb. Crafted with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;