## Home Page

<div style="display: flex;">
  <img src="https://codingthesmartway.com/wp-content/uploads/2019/02/gatsby-logo.png" width="50" alt="Gatsby" />
  <img src="https://cdn.worldvectorlogo.com/logos/react.svg" width="50" alt="React" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png" width="50" alt="GraphQL" />
  <img src="https://hashnode.imgix.net/res/hashnode/image/upload/jbhiqodxlyhaqogfuqwy/1486104606.png?w=180&h=180&fit=crop&crop=entropy&auto=format,enhance&q=60" width="50" alt="StyledComponents" />
</div>

#### Static blog and home website generated by Gatsby.js

## Inspiration

I decided to start this project because I wanted to create my personal blog. I picked Gatsby because I was interested in static site generators and React.

Inspiration for this project came mostly from [personal blog of Dan Abramov](https://overreacted.io/).

The blog is connected with the API on Contentful. <br/>
[Contentful headless CMS](https://www.contentful.com/)

## Tech Stack:

- Gatsby
- React
- GraphQL
- styled-components

## Building the project

The project requires `.env` file with Contentful token and spaceId

```sh
touch .env
```

```sh
CONTENTFUL_SPACE_ID=someID
CONTENTFUL_ACCESS_TOKEN=someToken
```

To start the local server:

```sh
gatsby develop
```

To create a production build:

```sh
gatsby build ; gatsby serve
```

## References

- [Gatsby docs](https://www.gatsbyjs.org/docs/)
- [styled-components docs](https://www.styled-components.com/docs)
- [Contentful Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/)

## Production

Blog is live at: [https://www.bartek-jozwowiak.me/blog](https://www.bartek-jozwowiak.me/blog)<br />
Home page is live at: [https://www.bartek-jozwowiak.me](https://www.bartek-jozwowiak.me)

## TODO

- [ ] Improve accessibility
- [ ] Add CI with Buddy
- [x] Improve meta tags
