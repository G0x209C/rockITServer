import { Process, specHelper } from "actionhero";

describe("Action: startGame", () => {
  const actionhero = new Process();

  beforeAll(async () => await actionhero.start());
  afterAll(async () => await actionhero.stop());

  test("returns OK", async () => {
    let { id } = await specHelper.buildConnection();
    const { ok } = await specHelper.runAction("startGame", {
      connectionID: id,
      name: "defaultName",
    });
    expect(ok).toEqual(true);
  });
});
