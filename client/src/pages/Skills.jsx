import skillsData from '../data/skills.json'

function Skills() {
  const { skills } = skillsData

  return (
    <section class="content-row">
      {skills.map(({ section, items }) => (
        <article class="content-block" key={section}>
          <h2>{section}</h2>
          <ul>
            {items.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}

export default Skills
