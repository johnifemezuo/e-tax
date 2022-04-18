import React from 'react'
import Container from '../../layout/Container';
import ListItems from './ListItems';

function DashboardListProduct() {
  return (
      <section className="">
      <ListItems
        items={[
          {
            name: "Thompson",
            category: "Men, Watch",
            price: "$250",
            stock: "500",
            sold: "65",
            revenew: "$14,950",
            action: "1",
            img: "/img/2.jpeg",
            actions: (
              <>
                <p
                  onClick={() => {
                    alert("p pressed");
                  }}
                  className="block py-1   text-left first-letter:uppercase"
                >
                  Stan Programming
                </p>
                <p
                  onClick={() => {
                    alert("stan pressed");
                  }}
                  className="block py-1   text-left first-letter:uppercase"
                >
                  Okechukwu Programming
                </p>
              </>
            ),
          },
          {
            name: "Thompson",
            category: "Men, Watch",
            price: "$250",
            stock: "500",
            sold: "65",
            revenew: "$14,950",
            action: "1",
            img: "/img/1.jpg",
            actions: [
              { title: "perform " },
              { title: "Lorem" },
              { title: "stances " },
            ],
          },
          {
            name: "Thompson",
            category: "Men, Watch",
            price: "$250",
            stock: "500",
            sold: "65",
            revenew: "$14,950",
            action: "1",
            img: "/img/1.jpg",
            actions: [
              { title: "when the " },
              { title: "written " },
              { title: "beginning  " },
            ],
          },
        ]}
      />
    </section>
  );
}

export default DashboardListProduct