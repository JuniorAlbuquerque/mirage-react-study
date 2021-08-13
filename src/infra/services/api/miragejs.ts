import { createServer } from "miragejs";
import { shifts } from "../../../data/mock/fakeData";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/shifts", () => shifts);
  },
});
