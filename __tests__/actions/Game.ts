import { Process, specHelper } from "actionhero";

describe("Action: game:start", () => {
  const actionhero = new Process();

  beforeAll(async () => await actionhero.start());
  afterAll(async () => await actionhero.stop());

  test("returns OK", async () => {
    const { ok } = await specHelper.runAction("game:start");
    expect(ok).toEqual(true);
  });
});
