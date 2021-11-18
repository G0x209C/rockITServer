import { Action } from "actionhero";

export class GameStart extends Action {
  constructor() {
    super();
    this.name = "game:start";
    this.description = "an actionhero action";
    this.outputExample = {};
  }

  async run(data) {
    // your logic here
    data.response.ok = true;
  }
}
