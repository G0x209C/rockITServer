import { Process, task, api, specHelper, chatRoom } from "actionhero";

describe("Task: checkGameExists", () => {
  const actionhero = new Process();

  beforeAll(async () => await actionhero.start());
  afterAll(async () => await actionhero.stop());

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
  });

  test("can be enqueued", async () => {
    await task.enqueue("checkGameExists", {});
    const found = await specHelper.findEnqueuedTasks("checkGameExists");
    expect(found.length).toEqual(1);
    expect(found[0].timestamp).toBeNull();
  });

  test("checksForGame", async () => {
    chatRoom.add("testRoom");
    let result = await task.enqueue("checkGameExists", { room: "testRoom" });
    expect(result).toEqual(true);
    chatRoom.destroy("testRoom");
  });
});
