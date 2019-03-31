<img src="streemur-logo.png" align="right" />

# Streemur

> Stream live video to a personal channel (gaming, tutorials, q&a, etc).

![](header.png)

## Live Demo

## Features

> dev features

- Fully TypeScript Client
- Redux
- [RTMP Media Server](https://github.com/illuspas/Node-Media-Server)
- Node Server (JSON)
- Semantic UI

> user features

- Authenticate with Google
- Create a new stream
- Edit / delete streams
- Stream live video using [OBS (Open Broadcast Software)](https://obsproject.com/)

## Usage

Clone

```sh
git clone https://github.com/rsokz/streemur
```

Start server

```sh
cd server
yarn
yarn start
```

Start RTMP server:

```sh
cd rtmpserver
yarn
yarn start
```

Start client:

```sh
cd client
yarn
yarn start
```

Start streaming with OBS:

1. Open OBS software
2. Open settings & update "Stream" settings
3. Set "Server" to `rtmp://localhost/live`
4. Create a new stream on the app
5. Set "Stream Key" to the `id` of your url
6. Start streaming

## Built With

## To-Do (v2)

- [ ] Connect to a DB
