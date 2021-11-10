import { Action } from "actionhero";

export class Answer extends Action {
  constructor() {
    super();
    this.name = "ExampleGame";
    this.description = "an actionhero action";
    this.outputExample = {};
  }

  async run(data) {
    // your logic here
    data.response.ok = true;
  }
}
