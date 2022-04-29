import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="React Tips only pros know Syllabus"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <p>
              This is the syllabus and course material for{" "}
              <a href="https://github.com/mauricedb/react-hooks-tips-only-the-pros-know/">ReactTipsOnlyProsKnow</a> (CYF), a
              a react course for typescript developers.
            </p>
            <p>
              During the course you will learn a technology stack that helps you
              build anything from a simple website to a powerful database-driven
              web application.
            </p>
            <p>The course contains:</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>SQL</li>
              <li>JavaScript</li>
              <li>
                Back-end development using{" "}
                <a href="https://nodejs.org">NodeJS</a>
              </li>
              <li>
                Front-end development using{" "}
                <a href="https://reactjs.org/">React</a>
              </li>
              <li>Test Driven Development using {" "}
                <a href="https://jestjs.io/">Jest</a></li>
            </ul>
            <p>
              We&#39;ll complement the course with workshops on modern software
              methodologies and job interview practices.
            </p>
            <h2 id="documentation">Documentation</h2>
            <p>
              In this Syllabus you&#39;ll find the content that we teach at
              react tips only pros know. For other operational details you should read{" "}
              <a href="https://github.com/mauricedb/react-hooks-tips-only-the-pros-know/blob/main/LICENSE">
                our documentation website
              </a>
              .
            </p>
            <h2 id="trainees">Trainees</h2>
            <p>
              If you&#39;re interested in joining the program, please{" "}
              <a href="https://github.com/mauricedb/react-hooks-tips-only-the-pros-know/blob/main/LICENSE">
                apply through our website
              </a>
              .
            </p>
            <h2 id="getting-involved">Getting involved</h2>
            <p>We are looking for contributors in</p>
            <ul>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>HTML 5</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
            <p>
              Both coders and non-coders can help out in a variety of ways that
              suit your skills and with varying commitment levels depending on
              how much time you can give.
            </p>
            <p>
              Please{" "}
              <a href="https://github.com/mauricedb/react-hooks-tips-only-the-pros-know/blob/main/LICENSE">
                contact us to get involved
              </a>
              !
            </p>
            <h2 id="contributing">Contributing</h2>
            <p>
              Please read our{" "}
              <a href="./contributing/overview">Contributing guide</a> to get
              started with how you can contribute to the react tips 
              Syllabus.
            </p>
            <h2 id="code-of-conduct">Code Of Conduct</h2>
            <p>
              You can find our full{" "}
              <a href="https://github.com/mauricedb/react-hooks-tips-only-the-pros-know/blob/main/LICENSE">
                code of conduct here
              </a>
              .
            </p>
            <h2 id="contributing">Creative Commons Open-Source License</h2>
            <p>
              This work is licensed under a{" "}
              <a
                href="https://creativecommons.org/licenses/by-sa/4.0/"
                target="_blank"
              >
                Creative Commons Attribution-ShareAlike 4.0 International
                License
              </a>
              .
            </p>
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
            >
              <img
                src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-sa.png"
                alt="Creative Commons Open-Source License"
                width="200px"
              />
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
