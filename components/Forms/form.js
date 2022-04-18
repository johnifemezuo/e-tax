import React from "react";
import Input from "./Input/Input";
import Container from "../../layout/Container";

function form() {
  return (
    <Container>
      <section className="my-4">
        <div>
          <Input
            inputConfig={{
              type: "text",
              placeholder: "Enter your name",
            }}
            inputLabel="Username"
            error={false}
          />
        </div>

        <div className="my-4">
          <Input
            inputConfig={{
              type: "text",
              placeholder: "Enter your name",
            }}
            inputLabel="Firstname"
            error={false}
          />
        </div>

        <div className="my-4">
          <Input
            inputConfig={{
              type: "text",
              placeholder: "Enter your name",
            }}
            inputLabel="Username"
            error={false}
          />
        </div>

        <Input
          inputConfig={{
            type: "password",
            placeholder: "Enter your name",
          }}
          inputLabel="Password"
          error={false}
        />
      </section>
    </Container>
  );
}

export default form;
