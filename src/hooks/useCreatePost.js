import { useMemo } from "react";

export const useSortPosts = (posts,  sort) => {
    const SortedPosts = useMemo(() => {
        console.log('render');
        if (sort) {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
      }, [sort, posts])

      return SortedPosts
}


export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortPosts(posts,sort)
    const sortAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
      }, [query, sortedPosts])

      return sortAndSearchPosts
}