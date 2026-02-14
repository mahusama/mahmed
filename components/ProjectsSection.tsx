import { Card, CardContent } from "@/components/ui/card";

export default function Projects() {
  return (
    <section className="bg-white py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-[#1a1a1a]">
          Key Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project 1 */}
          <Card className="rounded-2xl border border-[#7bb18f]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="w-12 h-1 bg-[#7bb18f] mb-4 rounded-full" />
              
              <h3 className="font-semibold text-xl text-[#1a1a1a]">
                Laboratory Management System
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Designed and deployed a full-scale laboratory management platform 
                handling patient registration, medical record creation, diagnostic 
                result processing, and secure storage indexed by unique patient IDs. 
                Streamlined laboratory workflows, reduced manual errors, and improved 
                turnaround time for medical result delivery.
              </p>
            </CardContent>
          </Card>

          {/* Project 2 */}
          <Card className="rounded-2xl border border-[#c03c3c]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="w-12 h-1 bg-[#c03c3c] mb-4 rounded-full" />

              <h3 className="font-semibold text-xl text-[#1a1a1a]">
                Medical Fitness & Travel Clearance System
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Developed a medical reporting system that evaluates patient clinical 
                data to determine travel fitness status (Fit / Not Fit). Automated 
                structured medical report generation, enforced compliance standards, 
                and ensured secure storage of patient health records for regulatory 
                and travel authority requirements.
              </p>
            </CardContent>
          </Card>

          {/* Project 3 */}
          <Card className="rounded-2xl border border-[#3c6fc0]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="w-12 h-1 bg-[#3c6fc0] mb-4 rounded-full" />

              <h3 className="font-semibold text-xl text-[#1a1a1a]">
                Financial API & Invoice Integration
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Engineered secure RESTful API integrations between healthcare systems 
                and external financial platforms. Linked patient medical reports with 
                invoice records, automated billing synchronization, and enabled 
                real-time reconciliation between clinical and accounting operations.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
