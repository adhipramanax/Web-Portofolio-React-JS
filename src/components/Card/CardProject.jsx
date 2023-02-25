import React from "react";

const CardProject = () => {
  const projects = [
    {
      from: "Binar Academy ",
      day: 29,
      month: "May",
      year: 2022,
      title: "Rental Card",
      description:
        "Rental Cars is the task of Binar Academy to create a landing page for car rental using React JS and Express JS.",
      background: `url("https://res.cloudinary.com/dhuvbrmgg/image/upload/v1657168710/Web%20Fortofolio/porto2.png") center/cover no-repeat`,
      url: "https://react-redux-adhipramanax.netlify.app",
    },
    {
      from: "Binar Academy ",
      day: 22,
      month: "July",
      year: 2022,
      title: "SecondHand",
      description:
        "Secondhand is an online marketplace platform for buying and selling used goods that sells accessories, electronics, clothes, smartphones and unused or other used goods that are still fit for use. built with React JS and Express JS",
      background: `url("https://res.cloudinary.com/dhuvbrmgg/image/upload/v1657214278/Web%20Fortofolio/secondhand.png") center/cover no-repeat`,
      url: "https://fe-group-4-fsw-2.vercel.app",
    },
    {
      from: "SOCIAL ECONOMIC ACCELERATOR LAB (SEAL) ",
      day: 30,
      month: "Dec",
      year: 2022,
      title: "Semarang Technopark",
      description:
        "Semarang Technopark is a website that provides workshop/seminar information, startup incubation programs for business people, coworking space and equipment rental for the general public in the city of Semarang, Central Java Province.",
      background: `url("https://res.cloudinary.com/dhuvbrmgg/image/upload/v1676882302/Web%20Fortofolio/Screenshot_12.png") center/cover no-repeat`,
      url: "http://demo.semarangtechnopark.id",
    },
  ];
  return (
    <>
      {projects.map((project) => {
        return (
          <div class="example-1 card-a col-lg-6 col-12 pb-2">
            <div
              class="wrapper"
              style={{ background: `${project.background}` }}
            >
              <div class="date">
                <span class="day">{project.day}</span>
                <span class="month">{project.month}</span>
                <span class="year">{project.year}</span>
              </div>
              <div class="data">
                <div class="content">
                  <span class="author">{project.from}</span>
                  <h1 class="title">
                    <a href={project.url} target="_blank">
                      {project.title}
                    </a>
                  </h1>
                  <p class="text">{[project.description]}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardProject;
