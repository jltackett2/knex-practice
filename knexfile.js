// Update with your config settings.
// docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
// docker ps -a
// exec -it 7c bash
// psql -U postgres
// \l
// npx knex migrate:make create_movies
//'postgres://USER_NAME:USER_PASSWORD@localhost/DATABASE_NAME'
//  movie_junkies_dev

// psql -U knex
// connect knex

//  --->>> npx knex migrate:latest

module.exports = {

  development: {
    client: 'pg',
    //'postgres://USER_NAME:USER_PASSWORD@localhost/DATABASE_NAME'
    connection: 'postgres://postgres:myknex@localhost/knexprac',
    migrations: {
      tableName: 'knex_migration'
    },
  },
    
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
