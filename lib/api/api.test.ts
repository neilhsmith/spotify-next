import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();
import { api } from "./api";

describe("api", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("gets from the given url", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: "abc123" }));

    api.get<{ data: string }>("http://someurl.com").then((res) => {
      // todo: this fails the test if it isn't correct but it rejects the promise and jest trys to rerun it or something until it breaks
      expect(res.data).toEqual("abc123");
    });

    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual("http://someurl.com");
  });

  it("gets with the given headers", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: "abc123" }));

    api
      .get<{ data: string }>("http://someurl.com", {
        Authorization: "Bearer abc123",
      })
      .then((res) => {
        expect(res.data).toEqual("abc123");
      });

    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][1]).toHaveProperty(
      "headers.Authorization",
      "Bearer abc123"
    );
  });

  it("posts to the given url without headers or body", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: "abc123" }));

    api.post<{ data: string }>("http://someurl.com").then((res) => {
      expect(res.data).toEqual("abc123");
    });

    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][1]).toHaveProperty("method", "POST");
    expect(fetchMock.mock.calls[0][1]).not.toHaveProperty("headers");
    expect(fetchMock.mock.calls[0][1]).not.toHaveProperty("body");
  });

  it("posts with the given headers and body", () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: "abc123" }));

    api
      .post<{ data: string }>(
        "http://someurl.com",
        {
          Authorization: "Bearer abc123",
        },
        {
          someData: "abc123",
        }
      )
      .then((res) => {
        expect(res.data).toEqual("abc123");
      });

    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][1]).toHaveProperty(
      "headers.Authorization",
      "Bearer abc123"
    );
    // post converts the body to json so we need to parse this here
    const body = JSON.parse(fetchMock.mock.calls[0][1]?.body?.toString() || "");
    expect(body.someData).toEqual("abc123");
  });
});
