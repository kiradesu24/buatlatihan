import contentfulClient from "@/contentful/contentfulClient";
import { 
  TypeBlogPostSkeleton,
  IContentfulAsset,
} from "@/contentful/types/blogpost.types";
  
const getBlogPostsContentful = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeBlogPostSkeleton>();
    console.log(data.items[0].fields.body);

    return data;
  } catch (err) {
    console.log(err);
  }
};

export default async function Home () {
  const posts = await getBlogPostsContentful();  
  return (
    <div>
      <div>HOME</div>
      {posts &&
      posts.items?.map((blog, idx) => (
        <div key={idx}>
          <img 
            src={`https:${
              (blog.fields.image as IContentfulAsset)?.fields.file.url
              }`}
              />
          <p>{blog.fields.title}</p>
          <p>{blog.fields.slug}</p>
        </div>
      ))}
    </div>
  );
}