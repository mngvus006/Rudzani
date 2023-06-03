import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/biddy.jpg";
import team2 from "assets/img/faces/mesete.png";
import team3 from "assets/img/faces/happy.jpeg";
import team4 from "assets/img/faces/pheeha.png";
import team5 from "assets/img/faces/five.jpeg";
const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                DONALD ‘BIDDY’ MADUNA
                <br />
                <small className={classes.smallTitle}>PRODUCTION MANAGER</small>
              </h4>
              <CardBody>
                <p className={classes.description}>

                 Biddy juggles between being a Production Coordinator and a Production / Project
                 Manager - conflicted on whether he is superhuman. He strongly believes that one
                 must be the first one in and the last one out for the job to be done. Not very “Glitzy”,
                 but yeah.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              “You must be the first one in and the last one out for the job to be done”
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                MMAPOWANA MASETE
                <br />
                <small className={classes.smallTitle}>PUBLICITY MANAGER</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                 Armed with a BA in Media Studies with Distinction and currently obtaining her
                 Honours Degree, Mmapowana is on a journey to become a creative force in all
                 aspects of filmmaking. A budding Writer, Poet, Editor, Marketer, and Make Up artist
                 expanding into film Producing, Directing, film Editing and more…She plans to use a
                 creative approach in film, literature, and art to address social ills and help South
                 African youth. Changing the trajectory of the media space in Africa and presenting it to the
                 world is my purpose.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
               “Changing the trajectory of the media space in Africa and presenting it to the world is
               my purpose”
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
               HAPPY KHUMALO
                <br />
                <small className={classes.smallTitle}>ASSISTANT DIRECTOR</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                 Be proud to know who KHUMALO is – Happy KHUMALO a university graduate in Media Studies. Core
                 force at RMP. He fell in love with the entertainment industry since high school where he wrote and
                 directed several school stage dramas. He is a self-taught writer and director. Being part of RMP is a
                 dream come true to him as he gets to practice what he has learned professionally.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
             “I am eager to strive in the industry”
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>

      <div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Card plain>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={team4} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      PHEEHA TJALE
                      <br />
                      <small className={classes.smallTitle}>SOCIAL MEDIA COORDINATOR</small>
                    </h4>
                    <CardBody>
                      <p className={classes.description}>

                       Pheeha Tjale is a media studies graduate at the university of Limpopo and social media Coordinator for
                       RMP. He is hardworking and sets reasonable goals. He believes in collaboration where often two minds
                       are better than one. Working in a team with a collaborative spirit is important to him. He dreams of
                       becoming the best social media coordinator. He oversees the launch and progress of several social
                       media platform of RMP. The goal is to ensure that all the social media platform get to the people. And of
                       course, situations happen when the results are not ideal, and when that happens, he does his best to tip
                       the hat in a positive direction.
                      </p>
                    </CardBody>
                    <CardFooter className={classes.justifyCenter}>
                    “Working in a team with a collaborative spirit is important to me”
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card plain>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={team5} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                     COUNTRIES “TROD VICTORY” MACHATE
                      <br />
                      <small className={classes.smallTitle}>POST PRODUCTION MANAGER</small>
                    </h4>
                    <CardBody>
                      <p className={classes.description}>
                     Stage name Trod Victory, formerly known as Countries Machate. A Media Studies degree holder. He
                     is an enthusiastic song composer who has contributed songs to various up-and-coming performers
                     globally. A passionate musician, music producer, a video editor, and writer. An enthusiastic
                     journalist by profession and a young, burgeoning filmmaker who believes that an individual is just as
                     restricted as their imagination that is why he enjoys exploring. Due to the flexibility of being able to
                     work in whatever profession you desire, he is delighted to be a part of RMP.” There is no time to
                     sleep because we work.
                      </p>
                    </CardBody>
                    <CardFooter className={classes.justifyCenter}>
                     “An individual is just as restricted as their imagination that is why I enjoy exploring.”
                    </CardFooter>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
    </div>
  );
}
