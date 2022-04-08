import { generateID } from "./generateID";

export const data = [
  {
    category: "Sport",
    childrens: [
      {
        id: generateID(),
        title: "Football"
      },
      {
        id: generateID(),
        title: "Tennis"
      },
      {
        id: generateID(),
        title: "Hockey"
      }
    ]
  },

  {
    category: "Hobbies",
    childrens: [
      {
        id: generateID(),
        title: "Drawing"
      },
      {
        id: generateID(),
        title: "Dancing"
      },
      {
        id: generateID(),
        title: "Singing"
      },
      {
        id: generateID(),
        title: "Reading"
      }
    ]
  },
  {
    category: "Music",
    childrens: [
      {
        id: generateID(),
        title: "Rap"
      },
      {
        id: generateID(),
        title: "Techno"
      },
      {
        id: generateID(),
        title: "Lo-fi"
      },
      {
        id: generateID(),
        title: "Classic"
      }
    ]
  }
];
