# 0. Je prends l'identité de admin

export PGUSER=plume20 # compte qui a tout les droits dont la création des base de données

# 1.initialisation de la BDD

# 1.1 Je supprime le user s'il existe et la BDD
dropdb plume20
dropuser admin_plume20

# 1.2 Création du user et de la BDD

psql -f database/init_db.sql -d postgres