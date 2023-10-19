# Endpoints

- POST /auth
  JSON body:
  {
    "PHPSESSID": "PHPSESSID",
  }
- GET /balance

### How to run on local machine

#### Step 1

Clone repository on your local machine and navigate to repository folder

```shell
git clone git@github.com:godluckman/at-test-task.git
cd at-test-task
```

#### Step 2

Build image and run it (`you should have Docker installed`).
It will then be started on port 3000.

```shell
docker compose up
```

#### Step 3

Stop all containers

```shell
docker compose down
```