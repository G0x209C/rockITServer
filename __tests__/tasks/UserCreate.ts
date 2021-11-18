import { Process, task, api, specHelper } from "actionhero";

describe("Task: UserCreate", () => {
  const actionhero = new Process();

  beforeAll(async () => await actionhero.start());
  afterAll(async () => await actionhero.stop());

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
  });

  test("can be enqueued", async () => {
    await task.enqueue("UserCreate", {});
    const found = await specHelper.findEnqueuedTasks("UserCreate");
    expect(found.length).toEqual(1);
    expect(found[0].timestamp).toBeNull();
  });
});
