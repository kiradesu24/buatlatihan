'use client';
import { useState, useEffect } from "react";
import { 
    IContentfulAsset,
    TypeBlogPostFields, 
    TypeBlogPostSkeleton 
} from "@/contentful/types/blogpost.types";
import contentfulClient from "@/contentful/contentfulClient"; 
import Image from "next/image";
import { useParams } from "next/navigation";
import RichText from "@/components/global/RichText";

export default function Article () {
    const params = useParams<{ slug: string }>();
    const [article, setArticle] = useState<any>();

    const fetchArticle = async () => {
        try {
            const data = await contentfulClient.getEntries ({
                content_type: "blogPost",
                limit: 1,
                "fields.slug": params.slug,
            });
            
            setArticle (data.items[0].fields);
        } catch (err){
            console.log(err);
            
        }
    };

useEffect(() => {
    fetchArticle();
}, []);

 return (
    <div>
       {article && (
        <div>
            <div className="imageContainer">
                <Image 
                src={`https:${
                    (article?.image as IContentfulAsset).fields.file.url
                }`}
                fill
                style={{ objectFit: "cover"}}
                alt="article-image"
                />
            </div>
            <h1>{article?.title}</h1>
            <RichText document={article?.body} />
        </div>
        )}
    </div>
    );
}

