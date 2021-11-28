import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter"

export type Post = {
  slug: string;
  title: string;
}

const postsPath = path.join(__dirname, "..", "..", "posts");

export async function getPosts(): Promise<Post[]> {
  const dir = await fs.readdir(postsPath);
  return Promise.all(
    dir.map(async (fileName) => {
      const file = await fs.readFile(
        path.join(postsPath, fileName)
      );
      const { attributes } = parseFrontMatter<{title: string}>(file.toString());
      return {
        slug: fileName.replace(/\.md$/, ""),
        title: attributes.title
      }
    })
  );
}
