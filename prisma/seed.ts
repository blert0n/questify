import prisma from "../schema/prisma";
import { v4 as uuidv4 } from "uuid";
async function main() {
  await prisma.form.upsert({
    where: { id: "job-application" },
    update: {},
    create: {
      id: "job-application",
      name: "Job application",
      ownerId: "",
      style: {
        Text: {
          text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis sem odio. Sed commodo vestibulum leo, sit amet tempus odio consectetur in. Mauris dolor elit, dignissim mollis feugiat maximus, faucibus et eros.</p>",
          fontSize: "14",
          fontFamily: "Open Sans",
        },
        Header: {
          text: "<p>Job application</p>",
          image: {
            name: "form-header-55ae5896-b5b8-4ff5-be58-cc12429aa4c4",
            type: "",
            origin: "server",
            dataUrl:
              "http://res.cloudinary.com/dfcbsf8um/image/upload/v1706985835/55ae5896-b5b8-4ff5-be58-cc12429aa4c4/quxna1tm3bpwmjbxjuql.jpg",
            initialDataUrl: "",
          },
          fontSize: "24",
          fontFamily: "Open Sans",
        },
        Question: {
          fontSize: "16",
          fontFamily: "Open Sans",
        },
        primaryColor: "#1b7c6b",
        secondaryColor: "#d1e5e1",
      },
      items: {
        create: [
          {
            name: "<p>Full name</p>",
            order: 1,
            required: true,
            items: [],
            type: "SHORT",
          },
          {
            name: "<p>Email</p>",
            order: 2,
            required: true,
            items: [],
            type: "SHORT",
          },
          {
            name: "<p>Phone number</p>",
            order: 3,
            required: true,
            items: [],
            type: "SHORT",
          },
          {
            name: "<p>Which position(s) are you interested in?</p>",
            order: 4,
            required: true,
            items: [
              {
                id: uuidv4(),
                order: 1,
                value: "Position 1",
              },
              {
                id: uuidv4(),
                order: 2,
                value: "Position 2",
              },
              {
                id: uuidv4(),
                order: 3,
                value: "Position 3",
              },
            ],
            type: "MULTIPLE_CHOICE",
          },
          {
            name: "<p>Submit your cover letter or resume</p>",
            order: 5,
            required: false,
            items: [],
            type: "LONG",
          },
        ],
      },
    },
  });
  await prisma.form.upsert({
    where: { id: "shopping-form" },
    update: {},
    create: {
      id: "shopping-form",
      name: "Order",
      items: {
        create: [
          {
            name: "<p>Are you a new or existing customer?</p>",
            order: 1,
            required: false,
            items: [
              {
                id: uuidv4(),
                order: 1,
                value: "I am a new customer",
              },
              {
                id: uuidv4(),
                order: 2,
                value: "I am an existing customer",
              },
            ],
            type: "SINGLE_CHOICE",
          },
          {
            name: "<p>What is the item you would like to order?</p>",
            order: 2,
            required: false,
            items: [],
            type: "SHORT",
          },
          {
            name: "<p>What color(s) would you like to order?</p>",
            order: 3,
            required: false,
            items: [
              {
                id: uuidv4(),
                order: 1,
                value: "Color 1",
              },
              {
                id: uuidv4(),
                order: 2,
                value: "Color 2",
              },
              {
                id: uuidv4(),
                order: 3,
                value: "Color 3",
              },
              {
                id: uuidv4(),
                order: 4,
                value: "Color 4",
              },
            ],
            type: "MULTIPLE_CHOICE",
          },
          {
            name: "<p>Your name</p>",
            order: 4,
            required: true,
            items: [],
            type: "SHORT",
          },
          {
            name: "<p>Phone number</p>",
            order: 5,
            required: true,
            items: [],
            type: "SHORT",
          },
          {
            name: "<p>Preferred contact method</p>",
            order: 6,
            required: false,
            items: [
              {
                id: uuidv4(),
                order: 1,
                value: "Phone",
              },
              {
                id: uuidv4(),
                order: 2,
                value: "Email",
              },
            ],
            type: "MULTIPLE_CHOICE",
          },
          {
            name: "<p>Questions and comments</p>",
            order: 7,
            required: false,
            items: [],
            type: "LONG",
          },
        ],
      },
      style: {
        Text: {
          text: "<p>After you fill out this order request, we will contact you to go over details and availability before the order is completed. If you would like faster service and direct information on current stock and pricing please contact us at Contact us at (123) 456-7890 or no_reply@example.com</p>",
          fontSize: "14",
          fontFamily: "Open Sans",
        },
        Header: {
          text: "<p>Order</p>",
          fontSize: "24",
          fontFamily: "Open Sans",
          image: {
            name: "form-header-d6bd2c2a-4b6c-4360-87ae-38faed5f0e17",
            type: "",
            origin: "server",
            dataUrl:
              "http://res.cloudinary.com/dfcbsf8um/image/upload/v1706978090/d6bd2c2a-4b6c-4360-87ae-38faed5f0e17/vbn3buf7livkbnzblwi6.jpg",
            initialDataUrl: "",
          },
        },
        Question: {
          fontSize: "16",
          fontFamily: "Open Sans",
        },
        primaryColor: "#6c1919",
        secondaryColor: "#f7f3f4",
      },
      ownerId: "",
      favorite: false,
    },
  });
  await prisma.form.upsert({
    where: {
      id: "event-rsvp",
    },
    update: {},
    create: {
      id: "event-rsvp",
      name: "Event RSVP",
      ownerId: "",
      favorite: false,
      style: {
        Text: {
          text: "<p>Event Address: 123 Your Street Your City, ST 12345</p>",
          fontSize: "14",
          fontFamily: "Open Sans",
        },
        Header: {
          text: "<p><strong>Event RSVP</strong></p>",
          image: {
            name: "form-header-8da0c149-677f-40ac-a7eb-d8c76e575ca1",
            type: "",
            origin: "server",
            dataUrl:
              "http://res.cloudinary.com/dfcbsf8um/image/upload/v1706633639/8da0c149-677f-40ac-a7eb-d8c76e575ca1/p5ehfqofz5jjivlzthhv.jpg",
            initialDataUrl: "",
          },
          fontSize: "24",
          fontFamily: "Open Sans",
        },
        Question: {
          fontSize: "16",
          fontFamily: "Open Sans",
        },
        primaryColor: "#673ab7",
        secondaryColor: "#e1d8f1",
      },
      items: {
        create: [
          {
            name: "<p>Can you attend?</p>",
            order: 1,
            required: true,
            items: [
              {
                id: uuidv4(),
                order: 1,
                value: "Yes, I'll be there",
              },
              {
                id: uuidv4(),
                order: 2,
                value: "Sorry, can't make it",
              },
            ],
            type: "SINGLE_CHOICE",
          },
          {
            name: "<p>How did you hear about this event?</p>",
            order: 2,
            required: true,
            items: [
              {
                id: uuidv4(),
                order: 4,
                value: "Online",
              },
              {
                id: uuidv4(),
                order: 3,
                value: "Newsletter",
              },
              {
                id: uuidv4(),
                order: 2,
                value: "Advertisement",
              },
              {
                id: uuidv4(),
                order: 1,
                value: "Friend",
              },
            ],
            type: "SINGLE_CHOICE",
          },
          {
            name: "<p>What are the names of people attending?</p>",
            order: 3,
            required: false,
            items: [],
            type: "SHORT",
          },
          {
            name: "<p>Comments/questions</p>",
            order: 4,
            required: false,
            items: [],
            type: "LONG",
          },
        ],
      },
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
