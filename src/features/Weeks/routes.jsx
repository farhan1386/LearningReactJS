import WeekPage from "./pages/WeekPage";

const weekRoutes = [
  {
    path: "/:weekId",
    element: <WeekPage />
  },
  {
    path: "/:weekId/:dayId",
    element: <WeekPage />
  }
];

export default weekRoutes;
