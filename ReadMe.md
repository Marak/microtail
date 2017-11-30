# microtail

HTTP microservice for easily and safely mapping Unix `tail` commands on your server to authenticated public URLs.

## Features

  - Uses actual `tail` binary ( very performant / no leaky abstractions )
  - Uses [microcule](https://github.com/stackvana/microcule) for standardized HTTP / STDIO mappings
  - Built-in SSL support
  - Built-in Basic Authentication
  - Easy configurable through simple static config file
  - Customizable view and layout
  
### Current Missing Features

  - No websocket support
  - No way to use `tail -f` reliably