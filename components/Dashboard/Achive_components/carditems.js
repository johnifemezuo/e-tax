import React from "react";
import CardItems from "../../components/Dashboard/AdminLayouts/CardItems/CardItems";
import Container from "../../layout/Container";

function carditems() {
  return (
    <Container>
      <CardItems
        data={[
          {
            src: "/img/1.jpeg",
            title: "Programming",
            time: "1 hour ago",
            description:
              "I really love this amazing design it reaally  help us to fasti our project",
          },
          {
            src: "/img/1.jpeg",
            title: "Programming",
            time: "1 hour ago",
            description:
              "I really love this amazing design it reaally  help us to fasti our project",
          },
          {
            src: "/img/1.jpeg",
            title: "Programming",
            time: "1 hour ago",
            description:
              "I really love this amazing design it reaally  help us to fasti our project",
          },
        ]}
      />
    </Container>
  );
}

export default carditems;
