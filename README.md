# Stargate

> Ingest server for my internal build tooling system.

## Info

This project runs in a container in a dokku server running in a DigitalOcean droplet. The `Procfile` is used to let dokku know how to run this project in a container.

### Environment

The `.env` file used for local development should contain the following key/value pairs:
```
APP_PORT=
LOG_LEVEL=
```
