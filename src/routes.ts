import {Request, Response, Router} from "express"
import { CreateFoodController } from "./controllers/food/create_food_controller";
import { GetFoodController } from "./controllers/food/get_food_controller";
import { RegisterController } from "./controllers/auth/register_controller";
import { LoginController } from "./controllers/auth/login_controller";
import { ensureauthencticated } from "./middlewares/ensure_authetication";
import { RefreshTokenLoginController } from "./controllers/auth/refresh_token_login_controller";
import { CreateWeightProgressController } from "./controllers/weight_progress/create_weight_progress_controller";
import { GetAllWeightProgressController } from "./controllers/weight_progress/get_all_weight_progress_controller";
import { UpdateWeightProgressController } from "./controllers/weight_progress/update_weight_progress_controller";
import { DeleteWeightProgressController } from "./controllers/weight_progress/delete_weight_progress_controller";
import { CreateExerciseProgressController } from "./controllers/exercise_progress/create_exercise_progress_controller";
import { GetAllExerciseProgressController } from "./controllers/exercise_progress/get_all_exercise_progress_controller";
import { UpdateExerciseProgressController } from "./controllers/exercise_progress/update_exercise_progress_controller";
import { DeleteExerciseProgressController } from "./controllers/exercise_progress/delete_exercise_progress_controller";
import { CreateConsumedFoodController } from "./controllers/consumed_food/create_consumed_food_controller";
import { GetAllConsumedFoodController } from "./controllers/consumed_food/get_all_consumed_food_controller";
import { DeleteConsumedFoodController } from "./controllers/consumed_food/delete_consumed_food_controller";
import { UpdateConsumedFoodController } from "./controllers/consumed_food/update_consumed_food_controller";
import { GetAllFoodController } from "./controllers/food/get_all_foods_controller";
import multer from "multer";
import { TacoCsvController } from "./controllers/taco_csv/taco_csv_controller";
import { CreateCategoryController } from "./controllers/categories/create_category_controller";
import { GetCategoryController } from "./controllers/categories/get_category_controller";

const multerConfig = multer();

const routes = Router();

routes.post("/taco", multerConfig.single("file"), new TacoCsvController().handle);


routes.get("/teste", (request: Request, response: Response) => {
    return response.json({"message":"deu certo"});
});

routes.post("/food",ensureauthencticated, new CreateFoodController().handle);
routes.get("/food",ensureauthencticated, new GetFoodController().handle);
routes.get("/foods",ensureauthencticated, new GetAllFoodController().handle);

routes.post("/category", new CreateCategoryController().handle);
routes.get("/category", new GetCategoryController().handle);

routes.post("/register", new RegisterController().handle);
routes.post("/login", new LoginController().handle);
routes.post("/refresh-token-login", new RefreshTokenLoginController().handle);

routes.post("/weight-progress",ensureauthencticated, new CreateWeightProgressController().handle);
routes.get("/weight-progress",ensureauthencticated, new GetAllWeightProgressController().handle);
routes.put("/weight-progress/:id",ensureauthencticated, new UpdateWeightProgressController().handle);
routes.delete("/weight-progress/:id",ensureauthencticated, new DeleteWeightProgressController().handle);

routes.post("/exercise-progress",ensureauthencticated, new CreateExerciseProgressController().handle);
routes.get("/exercise-progress",ensureauthencticated, new GetAllExerciseProgressController().handle);
routes.put("/exercise-progress/:id",ensureauthencticated, new UpdateExerciseProgressController().handle);
routes.delete("/exercise-progress/:id",ensureauthencticated, new DeleteExerciseProgressController().handle);

routes.post("/consumed_food",ensureauthencticated, new CreateConsumedFoodController().handle);
routes.get("/consumed_food",ensureauthencticated, new GetAllConsumedFoodController().handle);
routes.put("/consumed_food/:id",ensureauthencticated, new UpdateConsumedFoodController().handle);
routes.delete("/consumed_food/:id",ensureauthencticated, new DeleteConsumedFoodController().handle);

export {routes};