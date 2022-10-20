import { Router } from "express";

import {
  DisplayMoviesList,
  DisplayMoviesAddPage,
  ProcessMoviesAddPage,
  DisplayMoviesEditPage,
  ProcessMoviesEditPage,
  ProcessMoviesDelete,
} from "../controllers/movies.controller.server.js";

const router = Router();

router.get("/movies-list", DisplayMoviesList);
router.get("/movies-add", DisplayMoviesAddPage);
router.get("/movies-edit/:id", DisplayMoviesEditPage);
router.post("/movies-add", ProcessMoviesAddPage);
router.post("/movies-edit/:id", ProcessMoviesEditPage);
router.get("/movies-delete/:id", ProcessMoviesDelete);

export default router;
