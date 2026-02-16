import { Card, CardContent } from "@/components/ui/card";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-32 px-6 md:px-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-[#1a1a1a]">
          Key Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Project 1 */}
          <Card className="rounded-2xl border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
            <CardContent className="p-8">
              <h3 className="font-semibold text-xl text-[#1a1a1a] mb-4">
                Laboratory Management System
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Deployed a production-grade laboratory management platform used by over 100 labs, handling patient registration, diagnostic workflows, and secure medical record storage.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Collaborated with internal teams to streamline workflows, reduce manual processing errors, and improve result turnaround time across multiple facilities.
              </p>

              <div className="mt-6 text-sm text-gray-500">
                <span className="font-medium">Tech:</span> Next.js, Node.js, C#, SQL, REST APIs
              </div>

              <div className="mt-4 flex gap-2">
                <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                  Production System
                </span>
                <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                  100+ Labs
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Project 2 */}
          <Card className="rounded-2xl border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
            <CardContent className="p-8">
              <h3 className="font-semibold text-xl text-[#1a1a1a] mb-4">
                Medical Fitness & Travel Clearance System
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Developed a system to assess patient data for travel fitness (Fit / Not Fit) and automatically generate compliant medical reports, ensuring secure storage for regulatory purposes.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Worked closely with labs and healthcare administrators to implement compliance logic, automate report workflows, and maintain high data security standards.
              </p>

              <div className="mt-6 text-sm text-gray-500">
                <span className="font-medium">Tech:</span> Full-Stack Web, API Integration, Secure Data Storage
              </div>

              <div className="mt-4 flex gap-2">
                <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                  Production System
                </span>
                <span className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
                  Compliance-Focused
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Project 3 */}
          <Card className="rounded-2xl border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
            <CardContent className="p-8">
              <h3 className="font-semibold text-xl text-[#1a1a1a] mb-4">
                Financial API & Invoice Integration
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Engineered secure RESTful API integrations connecting healthcare systems with external financial platforms to synchronize patient reports with invoices.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Enabled real-time reconciliation between clinical and accounting operations, improving billing transparency and operational efficiency.
              </p>

              <div className="mt-6 text-sm text-gray-500">
                <span className="font-medium">Tech:</span> REST APIs, Authentication, Database Optimization
              </div>

              <div className="mt-4 flex gap-2">
                <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                  Production System
                </span>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
                  Automation
                </span>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
