import { describe, test, expect } from "bun:test";
import { artists } from "./artists";

const cast = artists.slice(0, 4);

describe("Home cast strip labels", () => {
  test("the four cast photos carry the role each artist plays in the show", () => {
    expect(cast.map((a) => [a.name, a.character])).toEqual([
      ["Leonardo Luizaga", "Gabino"],
      ["Edgar Luizaga", "Charon"],
      ["Camila Alegre & Ezequiel López", "Co-choreographers"],
      ["Evangelina Martínez & Nelson Leiva", "Griseta & Osvaldo"],
    ]);
  });

  test("no cast card falls back to its discipline label", () => {
    for (const a of cast) expect(a.character?.trim().length ?? 0).toBeGreaterThan(0);
  });
});
