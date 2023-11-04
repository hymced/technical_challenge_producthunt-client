export class PostsData {
  posts: {
    edges: [
      {
        cursor: String,
        node: {
          id: string,
          name: string,
          votesCount: number,
          createdAt: string,
          createdAtFormatted: string,
          url: String,
          website: String,
          thumbnail: {
            type: String,
            url: String
          }
          productLinks: [
            {
              type: String,
            url: String
            }
          ]
        }
      }
    ]
    pageInfo: {
      endCursor: String,
      hasNextPage: boolean
    }
  }
}
