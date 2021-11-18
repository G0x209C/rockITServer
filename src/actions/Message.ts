import { Action } from "actionhero";

export class MyAction extends Action {
  constructor() {
    super();
    this.name = "Message";
    this.description = "an actionhero action";
    this.outputExample = {};
  }

  async run(data) {
    // your logic here
    data.response.ok = true;
  }
}
