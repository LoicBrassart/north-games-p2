## Mongo updates chains

When updating one of our entities, some fields will need to be echoed through other collections.

- users (username, avatar)
  - users>social_circles>members
  - games>comments>author
  - news>author
  - news>comments>author
- games (game, image)
  - users>owned_games
  - news>game
  - stars>works
- news (published_at, published, title, cover)
  - users>written_news
  - games>related_news
- stars (name, avatar, link_boardgeek)
  - games>authors
  - games>editor
  - games>illustrators
