type Experiences = {
  name: string
  description: string,
  from: Date,
  to: Date
}

export const CVView = (props: {experiences: Array<any>}) => {
  return (
    <div>
      <h1>Mes expériences</h1>
      {props.experiences.map((experience: Experiences, i: number) => {
          return (
            <div key={i}>
              {experience.name}
              <br/>
              {experience.description}
              <br/>
              {new Date(experience.from).toLocaleDateString()}
              <br/>
              {new Date(experience.to).toLocaleDateString()}
              <br />
              <br />
            </div>
          )
        })
      }
    </div>
  )
}