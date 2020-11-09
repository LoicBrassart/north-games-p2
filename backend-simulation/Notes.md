## Mongo updates chains

When updating one of our entities, some fields will need to be echoed through other collections.

- users (username, avatar)
  - users>social_circles>members
  - games>comments>author
  - news>author
  - news>comments>author
- games (game, image)
  - todo
- news (published_at, published, title, cover)
  - todo
- stars (name, avatar, link_boardgeek)
  - todo
