import { Users, Linkedin, Mail, GraduationCap } from 'lucide-react';

const students = [
  {
    name: 'Haya Hassan',
    major: 'Information Systems',
    email: 'h.alhamar179@gmail.com',
    linkedin: 'https://www.linkedin.com/in/haya-alhamar-715584361',
  },
  {
    name: 'Zain Alkhajah',
    major: 'Information Systems',
    email: null,
    linkedin: 'https://www.linkedin.com/in/zain-alkhajah-487824356',
  },
  {
    name: 'Alghalia Nader',
    major: 'Information Systems',
    email: 'Alghalia1551@gmail.com',
    linkedin: 'https://www.linkedin.com/in/alghalia-husain-a752a7388',
  },
];

const supervisor = {
  name: 'Dr. Jafla Hassan Khalifa Al-Ammari',
  rank: 'Assistant Professor',
  email: 'jalammari@uob.edu.bh',
};

const Team = () => {
  return (
    <section id="team" className="bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-pink-light mb-4">
            <Users className="w-7 h-7 text-secondary" />
          </div>
          <h2 className="section-title">About the Project & Team</h2>
        </div>

        {/* Project Info */}
        <div className="card-base max-w-4xl mx-auto mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-primary" />
            <span className="font-heading font-semibold text-lg">Academic Project</span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            This project is a Final Year Senior Project completed during Semester 1 of the Academic
            Year 2025/2026 at the College of Information Technology — University of Bahrain.
          </p>
        </div>

        {/* Student Information */}
        <div className="mb-12">
          <h3 className="font-heading font-semibold text-xl text-center mb-6">Student Information</h3>
          <div className="card-base overflow-hidden">
            <div className="overflow-x-auto">
              <table className="table-styled">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Major</th>
                    <th>Email</th>
                    <th>LinkedIn</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={index}>
                      <td className="font-medium">{student.name}</td>
                      <td>{student.major}</td>
                      <td>
                        {student.email ? (
                          <a
                            href={`mailto:${student.email}`}
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            <Mail size={14} />
                            {student.email}
                          </a>
                        ) : (
                          <span className="text-muted-foreground">N/A</span>
                        )}
                      </td>
                      <td>
                        <a
                          href={student.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-mint-light hover:bg-mint transition-colors"
                        >
                          <Linkedin size={16} className="text-primary" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Supervisor Information */}
        <div>
          <h3 className="font-heading font-semibold text-xl text-center mb-6">Supervisor</h3>
          <div className="card-base max-w-2xl mx-auto">
            <div className="overflow-x-auto">
              <table className="table-styled">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Rank</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium">{supervisor.name}</td>
                    <td>{supervisor.rank}</td>
                    <td>
                      <a
                        href={`mailto:${supervisor.email}`}
                        className="inline-flex items-center gap-1 text-primary hover:underline"
                      >
                        <Mail size={14} />
                        {supervisor.email}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
