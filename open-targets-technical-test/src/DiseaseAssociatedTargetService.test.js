import { GetByQuery } from "./components/DiseaseAssociatedTargetService";
import axios from "axios";

jest.mock("axios");

describe("get disease associated target by query tests", () => {
  it("should return response with associated target rows", async () => {
    const actual = "some rows";
    const response = {
      data: {
        data: {
          disease: {
            associatedTargets: { rows: actual }
          }
        }
      }
    };
    axios.post.mockImplementationOnce(() => Promise.resolve(response));
    var expectedResult = await GetByQuery("some url", "some payload");
    expect(expectedResult).toBe(actual);
  });
});
