import Count from "views/Count/Count";
import Book from "views/Book/Book";

const routes = [
  {
    path: "/",
    redirect: "/book",
  },
  {
    path: "/book",
    component: Book,
  },
  {
    path: "/count",
    component: Count,
  },
];

export default routes;
