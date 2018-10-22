# Prisma nested export/import example

Tried to recreate Prisma's export/import losing relations case. Does not happen
with this setup.

## Create mock nested records

1. Open http://localhost:4469
2. Create record:
```gql
mutation {
  createUser(
    data:{
      name: "john",
      posts: {
        create: [
          {
            name: "post1",
            links: {
              create: [
                {
                  url: "link1"
                }
              ]
            }
          }
        ]
      }
    }
  ) {
    id
  }
}
```

## Check that nested relations are there

1. Open http://localhost:4469
2. Query:
```gql
{
  users {
    id
    posts {
      id
      links {
        id
      }
    }
  }
}
```

## Export

```
prisma export
```

## Clean database before re-import

1. Open http://localhost:4469
2. Clean with multiple mutations in this order:
```gql
mutation {
  deleteManyLinks {
    count
  }
}

mutation {
  deleteManyPosts {
    count
  }
}

mutation {
  deleteManyUsers {
    count
  }
}
```

## Import

```
prisma import --data export-XXX.zip
```

In my case, after an import is done - all relations are in place.
