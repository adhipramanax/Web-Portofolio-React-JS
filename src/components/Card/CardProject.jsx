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
    {
      from: "Koperasi As-sakinah Jawa Timur",
      day: 20,
      month: "Nov",
      year: 2023,
      title: "Sakinah Mart",
      description:
        'Sakinah Mart is a website project that I created to support my thesis entitled "Application of Augmented Reality as Digital Marketing Media in Product Packaging Using the Marker Based Tracking Method"',
      background: `url("https://res.cloudinary.com/dhuvbrmgg/image/upload/v1698222286/Web%20Fortofolio/ucd6me6vcpa74kmkdek7.png") center/cover no-repeat`,
      url: "http://sakinahmart.cloud/",
    },
    {
      from: "CV. Pramita Adhipramana",
      day: 14,
      month: "Des",
      year: 2023,
      title: "Pramita Kubah",
      description:
        "Pramita Kubah is a website that offers services for making mosque domes and mosque ornaments in the Berau Regency area, which I made myself for CV. Pramita Adhipramana as a service promotion media",
      background: `url("https://res.cloudinary.com/dhuvbrmgg/image/upload/v1698229235/Web%20Fortofolio/yh7yttmz0v4voklmlxvm.png") center/cover no-repeat`,
      url: "https://pramitakubah.com/",
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
