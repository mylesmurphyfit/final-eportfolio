import CardTable from '../components/ui/Card/CardTable'
import ResumeCard from '../components/cards/ResumeCard'

function ResumePage({ education = [], workExperience = [], skills = [], extracurricularActivities = [] }) {
  const educationColumns = [
    { key: 'school', label: 'School' },
    { key: 'degree', label: 'Degree' },
    { key: 'program', label: 'Program' },
    { key: 'year', label: 'Year' },
  ]

  const workColumns = [
    { key: 'company', label: 'Company' },
    { key: 'role', label: 'Role' },
    { key: 'dates', label: 'Dates' },
    { key: 'mainWork', label: 'Main Work' },
  ]

  return (
    <>
      <section>
        <h3 className="section-heading">Education</h3>
        <div className="cards-grid table-section">
          <CardTable
            title="Education"
            columns={educationColumns}
            rows={education.map((item, index) => ({
              id: `${item.school}-${index}`,
              school: item.school,
              degree: item.degree,
              program: item.program,
              year: item.year,
            }))}
          />
        </div>
      </section>

      <section>
        <h3 className="section-heading">Work Experience</h3>
        <div className="cards-grid table-section">
          <CardTable
            title="Work Experience"
            columns={workColumns}
            rows={workExperience.map((item, index) => ({
              id: `${item.company}-${index}`,
              company: item.company,
              role: item.role,
              dates: item.dates,
              mainWork: item.mainWork,
            }))}
          />
        </div>
      </section>

      <section className='cards-grid'>
        <div className="cards-grid">
          <ResumeCard
            title="Skills"
            subtitle="Tools and technologies"
            bullets={skills}
          />
        </div>

        <ResumeCard
          title="Extracurricular Activities"
          subtitle="Open source contributions and leadership roles"
          bullets={extracurricularActivities}
        />
      </section>
    </>
  )
}

export default ResumePage
